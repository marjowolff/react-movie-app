import React from 'react'
import axios from 'axios'

class FormMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

    onChange(e) {
        this.setState({
        [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Film ajouté avec l'ID ${res.id} !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
            });
      }

    render(){
        return(
            <div className="FormMovie">
                <h1>Saisie d'un film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="name">Nom du film</label>
                        <input
                        type="text"
                        id="name"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                        required
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="firstname">Url du film</label>
                        <input
                        type="text"
                        id="url"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                        required
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="email">Commentaire</label>
                        <input
                        type="textarea"
                        id="textarea"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}
                        required
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>
                    </fieldset>
                </form>
            </div>
        )
    }




}

export default FormMovie