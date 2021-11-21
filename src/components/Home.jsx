import React, { useState } from 'react'

function Home() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");

    function submitHanddler(e) {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request' })
        };

        console.log(first, second, third, fourth);
        localStorage.setItem("first", JSON.stringify(first));
        localStorage.setItem("second", JSON.stringify(second));
        localStorage.setItem("third", JSON.stringify(third));
        localStorage.setItem("fourth", JSON.stringify(fourth));
        alert('Submission Completed!');
    }

    return (
        <>
            <form onSubmit={submitHanddler}>
            <h3><strong>Enter the Vaccination Details.</strong></h3>
                <div className="form-group">
                    <label>Vaccination Name</label>
                    <input type="text" className="form-control" placeholder="Covaxin/Covishiled/pfizer" onChange={(event) => setFirst(event.target.value)} />
                </div>

                <div class="form-group form-check">
                <input type="checkbox" className="form-check-input" onChange={(event) => setSecond(event.target.value)} />
                    <label class="form-check-label" for="Check1">First dose taken..?</label>
                </div>


                <div className="form-group">
                    <label>First Dose Date</label>
                    <input type="date" className="form-control" onChange={(event) => setThird(event.target.value)} />
                </div>

                <div class="form-group form-check">
                <input type="checkbox" className="form-check-input" onChange={(event) => setSecond(event.target.value)} />
                    <label class="form-check-label" for="Check1">Second dose taken..?</label>
                </div>


                <div className="form-group">
                    <label>Second Dose Date</label>
                    <input type="date" className="form-control" onChange={(event) => setFourth(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-success btn-lg">Submit Request</button>
            </form>
            
        </>
    )
}

export default Home