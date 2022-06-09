import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { UserApi } from "../services/UserApi";
import { UserType } from "../types/UserType";

type UserInput = Omit<UserType, 'id'>;

interface UsersProviderProps {
    children: ReactNode;
}

interface UsersContextData {
    users: UserType[];
    createUser: (user: UserInput) => Promise<void>;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {
    const [users, setUser] = useState<UserType[]>([]);

    const fetchUser = async () => {
        await UserApi.get("/users")
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.log("Evita dog " + err)
            })
    }

    useEffect(() => {
        fetchUser();
    }, []);

    async function createUser(userInput: UserInput) {
        const response = await UserApi.post('/users', {
            ...userInput,
        })

        // console.log({ response })


        await setUser([
            ...users,
            response.data
        ])

    }

    return (
        <UsersContext.Provider value={{ users, createUser }}>
            {children}
        </UsersContext.Provider>
    )
}

export function useUsers() {
    const context = useContext(UsersContext);
    return context;
}