import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export function PostComments({ comments }) {
    return (
        <CommentsStyled>
            { comments.map((comment) => (
                <CommentStyled key={ comment.id }>
                    <CommentNameStyled>
                        Имя: { comment.name }
                    </CommentNameStyled>
                    <CommentEmailStyled>
                        Email: { comment.email }
                    </CommentEmailStyled>
                    <CommentBodyStyled>
                        Комментарий: { comment.body }
                    </CommentBodyStyled>
                </CommentStyled>
            )
            ) }
        </CommentsStyled>
    );
}

PostComments.propTypes = {
    comments: PropTypes.array
};

const CommentsStyled = styled.div`
    padding: 20px 0 0;
`;

const CommentStyled = styled.div`
    padding: 7px;
    border: 1px solid black;
    text-decoration: none;
    colot: black;
`;

const CommentNameStyled = styled.div`
    padding: 5px;
`;

const CommentEmailStyled = styled.div`
    padding: 5px;
`;

const CommentBodyStyled = styled.div`
    padding: 5px;
`;
