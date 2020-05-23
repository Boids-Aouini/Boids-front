import _ from 'underscore';
let postTemplate = `<>
<b class="names"> <%- firstname %> <%- lastname %> </b>
<p class="posts"> <%- post %> </p>
</>`
export const message = _.template(postTemplate.html())