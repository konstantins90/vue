<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { useStore } from '../store'

export default defineComponent({
    name: 'Login',
    components: {},
    setup() {
        const store = useStore()
        const input = reactive({
            email: 'konstantin.smetana@baslerweb.com',
            password: 'I3XPtGrTW8OB9AvnDcZk',
        })

        const submitLogin = () => {
            console.log('success')
            console.log(input)
            console.log(store)
            store.dispatch('root/loginUser', input)
        }

        return {
            submitLogin,
            input
        }
    },
})
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <h1>Login</h1>
                <div class="form">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" name="email" v-model="input.email" class="form-control" id="email" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" v-model="input.password" class="form-control" id="password">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary" v-on:click="submitLogin()">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>