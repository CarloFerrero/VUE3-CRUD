<template>
  <Card>
    <form class="create-form" @submit.prevent="handleSubmit">
      <h2 class="h2 mb10">Create User</h2>

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
      <div class="form-group">
        <label for="role">Role:</label>
        <input id="role" type="role" v-model="role" class="form-control" />
        <span class="error-message">{{ errors.role }}</span>
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone:</label>
        <input
          id="phoneNumber"
          type="phone"
          v-model="phoneNumber"
          class="form-control"
        />
        <span class="error-message">{{ errors.phoneNumber }}</span>
      </div>
      <div class="btn-wrapper">
        <button @click="goBack" class="btn btn-secondary">Go Back</button>
        <button type="submit" class="btn btn-primary">Add User</button>
      </div>
    </form>
  </Card>
</template>

<script>
import { defineComponent } from "vue";
import { useField } from "vee-validate";
import { useRouter } from "vue-router";
import Card from "../components/Card/Card.vue";
import { UserStore } from "@/store/modules/users";

export default defineComponent({
  components: {
    Card,
  },
  setup() {
    const { router } = useRouter();
    const userStore = UserStore();
    const goBack = () => {
      router.go(-1);
    };

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
    const { value: role, errorMessage: roleError } = useField(
      "role",
      "required|oneOf:admin,user,guest"
    );
    const { value: phoneNumber, errorMessage: phoneNumberError } = useField(
      "phoneNumber",
      "required|regex:/^[0-9]{10}$/"
    );

    const errors = {
      username: usernameError,
      email: emailError,
      password: passwordError,
      role: roleError,
      phoneNumber: phoneNumberError,
    };

    const addUser = async () => {
      const id = Math.floor(Math.random() * 100000);
      const newUser = {
        id,
        username: username.value,
        email: email.value,
        password: password.value,
        role: role.value,
        phoneNumber: phoneNumber.value,
      };
      console.log(newUser);
      await userStore.createUser(newUser);
      router.push({ name: "home" });
    };

    return {
      username,
      email,
      password,
      role,
      phoneNumber,
      handleSubmit: () => addUser(),
      goBack,
      errors,
      addUser,
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
.create-form {
  margin: 0 auto;
  max-width: 500px;
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
