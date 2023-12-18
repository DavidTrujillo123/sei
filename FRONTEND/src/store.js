import { writable } from 'svelte/store'

export const createUser = () => {
    const {subscribe, update, set} = writable(null);

    return{
        subscribe,
        setData: (userData) =>{
            let data = {state: false, userData: userData};
            set(data)
        },
        updateState: () =>{
            update((currentState) => ({
                state: !currentState.state,
                userData: currentState.userData,
            }));
        },
        reset: () =>{
            set({ state: false, userData: null })
        }
    }
};

export const createCode = () => {
    const {subscribe, set} = writable(null);

    return{
        subscribe,
        setData: (number) =>{
            set(number)
        },  
        reset: () =>{
            set(null)
        }
    }
};


export const userSaver = createUser();
export const codeSaver = createCode();