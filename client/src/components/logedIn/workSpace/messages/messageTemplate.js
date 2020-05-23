import _ from 'underscore';

export const message = _.template(`<>
                                    <b class="names"> <%- firstname %> <%- lastname %> </b>
                                    <p class="posts"> <%- post %> </p>
                                    </>`)