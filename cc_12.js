//Task 1 Created Revenue Metric Card
const dashboard_1 = document.getElementById("dashboard");
const dashboard_2 = document.querySelector("#dashboard");
// selecting the dashboard container using the getelementid and queryselector 
const revenueCard = document.createElement("div");
const profitCard = document.createElement("div");
const expensesCard = document.createElement("div");

revenueCard.setAttribute("class","metric-card");
revenueCard.setAttribute("id", "revenueCard");

profitCard.setAttribute("class","metric-card");
profitCard.setAttribute("id", "profitCard");

expensesCard.setAttribute("class","metric-card");
expensesCard.setAttribute("id", "expensesCard");

// making metric card div
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>"
profitCard.innerHTML = "<h3>Profit</h3><p>$0</p>"
expensesCard.innerHTML = "<h3>Expenses</h3><p>$0</p>"

// making sure the attributes are set for the class as well as for the id
dashboard_1.appendChild(revenueCard);
dashboard_1.appendChild(profitCard);
dashboard_1.appendChild(expensesCard);


// "Task 2 - Updated Metric Cards via Array Conversion"

const metricCards = document.querySelectorAll(".metric-card");
//making sure to select all of the metric cards for the dashboard container 

// the array will update for each card here
Array.from(metricCards).forEach(card =>{
    card.innerHTML += " - Updated";
    card.style.backgroundColor = "lightgreen"
});

// "Task 3 - Implemented Dynamic Inventory List"

const inventoryList = document.getElementById("inventoryList");
function addInventoryItem(productName) {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "product-item");
    listItem.setAttribute("data-product", productName);
    listItem.textContent = productName;

    listItem.addEventListener("click", () =>{
        inventoryList.removeChild(listItem);
    });
    inventoryList.appendChild(listItem);
}

// "Task 4 - Demonstrated Event Bubbling in Customer Section"
const customerSection = document.getElementById("customerSection");
// clicking event 

function addCustomerCard(customerName) {
    const customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = customerName;
    customerCard.addEventListener("click", (event) => {
        console.log("Customer card clicked");
        event.stopPropagation(); // Prevents event from bubbling to parent
    });
    
    customerSection.appendChild(customerCard);
}

addCustomerCard("Alice");
addCustomerCard("Bob");