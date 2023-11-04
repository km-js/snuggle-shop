import { PaginationContainer, PageNumber } from './Pagination.style';


function Pagination({ currentPage, totalPages, onPageChanges }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
    console.log(pageNumbers);
    return (

        <PaginationContainer>
            {pageNumbers.map((page) => (
                <PageNumber
                    key={page}
                    active={currentPage === page}
                    onClick={() => onPageChanges(page)}
                >
                    {page}
                </PageNumber>
            ))}
        </PaginationContainer>
    )
}

export default Pagination