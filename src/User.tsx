import React from 'react';


interface UserSchema {
    apiData: {
        firstName: string;
        invoice: { id: number, lastName: string, age: number, married: boolean }[];
    }
};

export const User = (props: UserSchema) => {
    const { firstName, invoice } = props.apiData;
    return (
        <div>
            <p>The winner is</p>
            <p>{firstName}</p>
            {invoice.map((item, indx) =>
                <div key={indx}>
                    <p>The name is {item.lastName} and the age is {item.age}</p>
                    <p>and you are {item.married ? `married` : `not married`} </p>
                </div>
            )}
        </div>
    )
}

