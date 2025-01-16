import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider, onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth'
import type { User } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {

  const router = useRouter()
  const auth = getAuth()
  const errorMsg = ref<string>('')
  const user = ref<User | null>(null)
  const loading = ref<boolean>(true)

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithPopup(auth, provider))
      .then(() => {
        router.push('/projects')
      })
      .catch(() => {
        router.push('/sign-in')
      })
  }

  const register = (email: string, password: string, name: string) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => createUserWithEmailAndPassword(auth, email, password))
      .then((userCredential) => {
        const user = userCredential.user
        return updateProfile(user, { displayName: name })
      })
      .then(() => {
        router.replace({ name: 'projects' })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const login = (email: string, password: string) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithEmailAndPassword(auth, email, password))
      .then(() => {
        router.replace({ name: 'projects' })
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMsg.value = 'Invalid email'
            break
          case 'auth/user-not-found':
            errorMsg.value = 'No account with that email was found'
            break
          case 'auth/wrong-password':
            errorMsg.value = 'Invalid credentials'
            break
          default:
            errorMsg.value = 'Invalid credentials'
            break
        }
      })
  }

  const logout = () => {
    auth.signOut().then(() => {
      router.push('/sign-in')
    }).catch((error) => {
      console.error('Error during sign out:', error)
    })
  }

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      user.value = firebaseUser;
    } else {
      user.value = null;
    }
    loading.value = false
  });

  return {
    //properties

    //getters
    errors: computed(() => errorMsg.value),
    isAuthenticated: computed(() => user.value !== null),
    user: computed(() => user.value ),
    loading: computed(() => loading.value),
    userName: computed(() => user.value?.displayName?.split(' ')[0] || ''),

    //actions
    signInWithGoogle,
    register,
    login,
    logout
  }
})
