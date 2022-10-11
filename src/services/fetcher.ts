export const fetchData = <TData>(query: string): (() => Promise<TData>) => {
    return async (): Promise<TData> => {
        const res = await fetch(`https://api.chucknorris.io/jokes/${query ? query : ""}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const json = await res.json();

        if (json.errors) {
            const { message } = json.errors[0];

            throw new Error(message);
        }

        return json;
    };
};
