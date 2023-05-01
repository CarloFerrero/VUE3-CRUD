<template>
  <div class="btn-wrapper">
    <button @click="showModal = true" class="btn-modal">
      {{ buttonText }}
    </button>

    <div class="delete-modal" v-if="showModal">
      <div class="delete-modal-content">
        <span class="delete-modal-close" @click="close">&times;</span>
        <p class="delete-modal-message">{{ message }}</p>
        <div class="delete-modal-buttons">
          <button class="delete-modal-cancel" @click="close">
            {{ cancelText }}
          </button>
          <button class="delete-modal-confirm" @click="confirm">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomizableModal",
  props: {
    item: {
      type: Object,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Delete",
    },
    message: {
      type: String,
      default: "Are you sure you want to delete?",
    },
    confirmText: {
      type: String,
      default: "Confirm",
    },
    cancelText: {
      type: String,
      default: "Cancel",
    },
    confirmDelete: {
      type: Function,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    confirm() {
      this.confirmDelete(this.item);
      this.closeModal();
    },
    close() {
      this.showModal = false;
    },
  },
};
</script>

<style>
/* Style for modal */
.delete-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Style for modal content */
.delete-modal-content {
  background-color: #fff;
  border-radius: 5px;
  width: 300px;
  padding: 15px;
}

/* Style for close button */
.delete-modal-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 0;
  line-height: normal;
}

.delete-modal-close:hover,
.delete-modal-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Style for modal message */
.delete-modal-message {
  margin-top: 0;
  margin-bottom: 20px;
}

/* Style for modal buttons */
.delete-modal-buttons {
  display: flex;
  justify-content: space-between;
}

/* Style for confirm button */
.delete-modal-confirm {
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
}

.delete-modal-confirm:hover {
  background-color: #c82333;
}

/* Style for cancel button */
.delete-modal-cancel {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
}

.delete-modal-cancel:hover {
  background-color: #f2f2f2;
}
.btn-modal {
  background-color: #dc354515;
  color: #dc3545;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
}
.btn-wrapper {
  width: 100%;
}
</style>
