//Task 1 Created Revenue Metric Card
const dashboard_1 = document.getElementById("dashboard");
const dashboard_2 = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");

revenueCard.setAttribute("class","metric-card");
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>"

dashboard_1.appendChild(revenueCard);

// "Task 2 - Updated Metric Cards via Array Conversion"

const metricCards = document.querySelectorAll(".metric-card");

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