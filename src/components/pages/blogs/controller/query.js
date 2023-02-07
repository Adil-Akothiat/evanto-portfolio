import {gql} from "graphql-request";

const QUERY = gql`
    {
        myPortfolioBlogs {
            id
            titleImage {
                url
            }
            title
            category
            date
            description
            richText {
                html
            }
        }
    }
`;

export default QUERY;