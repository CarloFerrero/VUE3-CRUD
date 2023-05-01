<template>
  <h2 class="h2 mb10">Edit User</h2>
  <Card>
    <form class="edit-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          id="username"
          type="text"
          v-model="username"
          class="form-control"
        />
        <span class="error-message">{{ errors.username }}</span>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" class="form-control" />
        <span class="error-message">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          class="form-control"
        />
        <span class="error-message">{{ errors.password }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  </Card>
</template>

<script>
import { defineComponent } from "vue";
import { useForm, useField } from "vee-validate";
import Card from "../components/Card/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { handleSubmit } = useForm();

    const { value: username, errorMessage: usernameError } = useField(
      "username",
      "required|min:3"
    );
    const { value: email, errorMessage: emailError } = useField(
      "email",
      "required|email"
    );
    const { value: password, errorMessage: passwordError } = useField(
      "password",
      "required|min:8"
    );

    const errors = {
      username: usernameError,
      email: emailError,
      password: passwordError,
    };

    // Populate the form fields with the user's data
    username.value = "Carlo Ferrero";
    //props.user.username;
    email.value = "carlo.ferrero@gmail.com";
    //props.user.email
    password.value = "123456789";
    //props.user.password

    return {
      username,
      email,
      password,
      handleSubmit,
      errors,
    };
  },
});
</script>

<style>
.h2 {
  color: #007bff;
}
.h2,
.mb10 {
  margin-bottom: 10px;
}
.edit-form {
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.form-control {
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  width: 100%;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0069d9;
}
</style>
