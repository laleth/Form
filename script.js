document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const address = document.getElementById('Address').value;
    const pin = document.getElementById('pin').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const foodlist = document.querySelectorAll('input[name="foods"]:checked');
    const foods = Array.from(foodlist).map(food => food.value).join(', ');
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${fname}</td>
      <td>${lname}</td>
      <td>${address}</td>
      <td>${pin}</td>
      <td>${gender}</td>
      <td>${foods}</td>
      <td>${country}</td>
      <td>${state}</td>
    `;

    document.getElementById('dataTable').querySelector('tbody').appendChild(newRow);

    document.getElementById('dataForm').reset();
  });