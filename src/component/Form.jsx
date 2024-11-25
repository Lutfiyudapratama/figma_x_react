import React from 'react'

const form = () => {
  return (
    <div>
        <section className="hero">
            <div className="overlay">
                <form className="search-form">
                    <div>
                        <label htmlFor="from">From:</label>
                        <input type="text" id="from" placeholder="Enter city" />
                    </div>
                    <div>
                        <label htmlFor="to">To:</label>
                        <input type="text" id="to" placeholder="Enter destination" />
                    </div>
                    <div>
                        <label htmlFor="departure-date">Tanggal Keberangkatan:</label>
                        <input type="date" id="departure-date" />
                    </div>
                    <div>
                        <label htmlFor="return-date">Tanggal Kembali:</label>
                        <input type="date" id="return-date" />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default form
