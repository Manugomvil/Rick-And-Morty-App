import {useNavigate, useParams} from 'react-router-dom';
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";
import {connect} from 'react-redux'
import {getPagesData} from '../Actions'
import '../assets/styles/components/Pagination.css'

const Paginacion = (props) =>{
    const {pages, getPagesData} = props
    const {isLoading} = useFetch('https://rickandmortyapi.com/api/character/',getPagesData)
    var {id}= useParams();
    const navigate = useNavigate()
    function handlePageClick({ selected: selectedPage }) {
        navigate(`/Personajes/${parseInt(selectedPage) + 1}`);
    }
    return(
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={!isLoading?pages.info.pages:1}
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
const mapDispatchToProps = {
    getPagesData
}
const mapStateToProps = state =>({
    pages:state.data.pagesdata
})
export default connect(mapStateToProps,mapDispatchToProps)(Paginacion)