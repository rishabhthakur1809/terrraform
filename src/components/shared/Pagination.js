import React, { Component } from 'react'

class Pagination extends Component {
	
	constructor(props) {
		super(props)
		this.paginationClick = this.paginationClick.bind(this)
		this.perPageChange = this.perPageChange.bind(this)
    }
    
    paginationClick(e) {
		if(e.target.id==='previous'){
			this.props.updateCurrentPage(this.props.currentPage - 1)
		}else if(e.target.id==='next'){
			this.props.updateCurrentPage(this.props.currentPage + 1)
		}else{
			this.props.updateCurrentPage(Number(e.target.id))
		}
    }
	
	perPageChange(e) {
		this.props.updateResultsPerPage(e.target.value)
    }

    render() {
		const paginationPages = []
		const numberOfPages = Math.ceil(this.props.results.length / this.props.resultsPerPage)
		for (let i = 1; i <= numberOfPages; i++) {
			paginationPages.push(i)
		}

		const renderPagination = paginationPages.map(number => {
			
			const activeClass = number === this.props.currentPage ? 'active' : ''
			const classes = `page-item ${activeClass}`

			return(
				<li
					className={classes}
					key={number}
				>	
					<a href="#{number}" 
						id={number}
						onClick={this.paginationClick}
						className="page-link">{number}</a>
				</li>
			)
		})
		
		const previousClasses = `page-item ${(this.props.currentPage===1) ? 'disabled' : ''}`
		const nextClasses = `page-item ${(this.props.currentPage===numberOfPages) ? 'disabled' : ''}`
		
        return(
			<div className="row">
				<div className="col-lg-9">
					<nav>
						<ul id="page-numbers" className='pagination d-flex flex-wrap'>
							<li className={previousClasses}><a href="#previous" className='page-link' onClick={this.paginationClick} id='previous'>&laquo;</a></li>
								{renderPagination}
							<li className={nextClasses}><a href="#next" className="page-link" onClick={this.paginationClick} id='next'>&raquo;</a></li>
						</ul>
					</nav>
				</div>
				<div className="col-lg-3">
					<div className="form-group">
						<label>Per Page:</label>
						<select value={this.props.resultsPerPage} onChange={this.perPageChange}>
							<option value={10}>10</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
							<option value={100}>100</option>
							<option value={500}>500</option>
							<option value={1000}>1000</option>
						</select>
					</div>
				</div>
			</div>
        )

	}
    
}

export default Pagination