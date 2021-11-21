import React from 'react'

function Admin() {
    return (
        <div>
            <h1> admin</h1>
            <table class="table-info">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Vivek</td>
                    <td>Singh</td>
                    <td>@vikk</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>abc</td>
                    <td>def</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">qwe</th>
                    <td colspan="2">xyz</td>
                    <td>@xyz</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default Admin