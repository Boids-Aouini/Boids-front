import _ from 'underscore';
let nameTemplate = `<%- firstname %> <%- lastname %>`
export const name = _.template(nameTemplate)

let postTemplate = `<%- post %>`
export const message = _.template(postTemplate)
