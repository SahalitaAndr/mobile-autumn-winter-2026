Goal: CreatePostScreen creates a post via the API.

UI: TextInput Title, TextInput body (multiline), Publish button.
Behavior:
- empty fields → button disabled (or Alert to fill both);
- while sending, button disabled, label Sending…;
- success → clear fields, Alert Done;
- error → Alert with the error text.
Limits: fetch through createPost, no form libraries.
Done when: the post shows up in the list (after refresh) and in Swagger.
Skip: editing, deleting other people's posts, auth.

Shared DB: put your last name in the title. Do not change or delete other posts.
