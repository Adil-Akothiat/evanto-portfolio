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
            authorImage {
                url
            }
            authorName
            authorJobTitle
            authorJobDescription
        }
    }
`;

export default QUERY;