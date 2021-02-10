import {useHistory, useParams} from 'react-router-dom';
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";

const Paginacion = () =>{

    const {data} = useFetch('https://rickandmortyapi.com/api/character/',
    {info:[],
        results:[]})
    var {id}= useParams();
    const h = useHistory()
    function handlePageClick({ selected: selectedPage }) {
        h.push(`/Personajes/${parseInt(selectedPage) + 1}`);
    }
    return(
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={data.info.pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        initialPage={id-1}
    >
            </ReactPaginate>
    )
}
export default Paginacion