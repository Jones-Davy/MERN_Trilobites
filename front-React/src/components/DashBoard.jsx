import React from 'react'
import { NavLink } from 'react-router-dom';
const DashBoard = () => {
  return (
    <div>
        <div className='container-fluid mb-5'>
        <h1 className='display-4'>Dashbroad</h1>
        <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Authors</th>
        <th scope="col">Name</th>
        <th scope="col">Edition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>T. Appel, The Cuvier-Geoffroy Debate</td>
        <td> French Biology in the Decades Before Darwin</td>
        <td>New York: Oxford University Press, 1987</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Daeschler et al.</td>
        <td> A Devonian tetrapod-like fish and the origin of the tetrapod body plan</td>
        <td> Nature 440:757–763</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Shubin et al.</td>
        <td> The pectoral fin of Tiktaalik roseae and the origin of the tetrapod limb</td>
        <td>Nature 440:764–771.</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td> L. Wolpert, J. Smith, T. jessel, F. Lawrence, E. Robertson</td>
        <td>Developmental Biology</td>
        <td>Oxford, Eng.: Oxford University Press, 2006</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Z. Kielan-Jaworowska, R.L. Cifelli</td>
        <td>Mammals from the Age of Dinosaurs</td>
        <td>University of California Press, 1979</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>К. Moore and T.V.-V.N. Persaud</td>
        <td> The Developing Human</td>
        <td>7th ed. (Philadelphia: Elsevier, 2006)</td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td>Chen, J.-Y., Huang, D.Y., and Li, C.W. </td>
        <td>An early Cambrian craniate-like chordate</td>
        <td>Nature 402:518–522</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>L.W. Buss</td>
        <td>The Evolution of Individuality</td>
        <td>Princeton: Princeton University Press, 2006</td>
      </tr>
      <tr>
        <th scope="row">9</th>
        <td>Young, В., and Trask, В.J.</td>
        <td>The sense of smell: genomics of vertebrate odorant receptors</td>
        <td>Annual Review of Neuroscience 22:487–509.</td>
      </tr>
      <tr>
        <th scope="row">10</th>
        <td>Oakley, T.</td>
        <td>The eye as a replicating and diverging modular developmental unit</td>
        <td>Trends in Ecology and Evolution 18:623–627</td>
      </tr>
      <tr>
        <th scope="row">11</th>
        <td>J. Clack, Gaining Ground</td>
        <td>Gaining Ground</td>
        <td>Bloomington: Indiana University Press, 2002</td>
      </tr>
      <tr>
        <th scope="row">12</th>
        <td>P. Forey, ed., Cladistics</td>
        <td>A Practical Course in Systematics </td>
        <td>Oxford, Eng.: Clarendon Press, 1992</td>
      </tr>
      <tr>
        <th scope="row">13</th>
        <td>R. DeSalle, G. Girbet, and W. Wheeler</td>
        <td> Molecular Systematics and Evolution: Theory and Practice</td>
        <td>Basel: Birkhauser Verlag, 2002</td>
      </tr>
    </tbody>
  </table></div> </div>
  )
}
export default DashBoard;