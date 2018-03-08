import React from 'react';

export const PostContainer = props => {
    return (
        <div>
            {props.dummyData.map((person => {
                return (
                    <div>
                        <h1>Username: {person.username}</h1>
                    </div>
                )
            }))}
        </div>
    )
};

export default PostContainer;