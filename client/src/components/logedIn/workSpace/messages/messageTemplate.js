import _ from 'underscore';

export const message = _.template(`<>
                                    <b class="name"> <%- firstname %> <%- lastname %> </b>
                                    <p class="post"> <%- post %> </p>
                                    </>`)