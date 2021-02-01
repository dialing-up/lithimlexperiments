import {html, LitElement} from 'https://cdn.skypack.dev/lit-element';
export class BreweryDetail extends LitElement{
    static get properties(){
        return{
            name: {type: String},
            type: {type: String},
            city: {type: String},
            url: {type: String},
            visited: {type: Boolean},
        };
    }   

    render(){
        return html`
            <h3>${this.name} (${this.visited ? "Visited": "Not Visited"})</h3>
            <p>Brewery Type : ${this.type}</p>
            <p>City : ${this.city}</p>
            <p><a href = ${this.url}>${this.url}</a></p>
            <mwc-button raised @click = ${this._toggleVisitedStatus}>
                Mark as ${this.visited ? "not visited": "visited"}
            </mwc-button>
        `;
    }

    _toggleVisitedStatus(){
        this.dispatchEvent(new CustomEvent('toggle-visited-status'));
    }
}