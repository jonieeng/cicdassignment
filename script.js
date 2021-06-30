// (c) Anuflora Systems 
const balance = document.getElementById('balance');
const money_plus = document.getElementById('deposit');
const money_minus = document.getElementById('loan');
const list = document.getElementById('list');
const form = document.getElementById('form');
const custname = document.getElementById('custname');
const reco = document.getElementById('reco');
const user = document.getElementById('user');
const pwd = document.getElementById('pwd');

const TransactionDataAll = [
   { id: 1, customername: 'Flora', bank: 'DBS', deposit: 3000, loan: 2000 },
   { id: 2, customername: 'Flora', bank: 'OCBC', deposit: 4000, loan: 2000 },
   { id: 3, customername: 'Mikhil', bank: 'DBS', deposit: 3000, loan: 2000 },
   { id: 4, customername: 'Sashil', bank: 'UOB', deposit: 6000, loan: 1000 },
   { id: 5, customername: 'Jack', bank: 'UOB', deposit: 6000, loan: 8000 }

  ];

 var TransactionData = null;

// Add transactions to DOM list
// modified transaction to be sum of deposit and loan instead of separate deposit and loan
function addTransactionDOM(transaction) {
  let balUser = transaction.deposit-transaction.loan  
  
  const deposit_item = document.createElement('li');
  if (balUser>0) {deposit_item.classList.add('plus');}
  else {deposit_item.classList.add('minus');}

  deposit_item.innerHTML = `
  ${transaction.customername}-${transaction.bank}  <span> ${balUser>0? '$': '-$'} ${Math.abs(
    balUser)}</span>
  `;

//if (transaction.depositi)
  list.appendChild(deposit_item);
}
//loan item function taken out
/*const loan_item = document.createElement('li');

loan_item.classList.add('minus');
loan_item.innerHTML = `
${transaction.customername}-${transaction.bank} <span> -$ ${Math.abs(
  transaction.loan  
)}</span> 
`;

list.appendChild(loan_item);
}*/


// Update the balance, deposit and loan
function updateValues() {
  const deposits = TransactionData.map(transaction => transaction.deposit);
  const loans = TransactionData.map(transaction => transaction.loan);
  const total_deposit = deposits.reduce((acc, item) => (acc += item), 0);
  const total_loan = loans.reduce((acc, item) => (acc += item), 0);
  const bal = total_deposit - total_loan;
  balance.innerText = ((bal >= 0)? `$${bal}`: `-$${Math.abs(bal)}`);

  /* To replaced with graph
  money_plus.innerText = `$${total_deposit}`;
  money_minus.innerText = `$${total_loan}`;
  */
  reco.innerText = (bal >= 0)? "You Have Sound Financial Health": "Your Financial Health is Weak";

  //pie chart
  let data = [{transactionType: "Deposit", amt: total_deposit}, {transactionType: "Loan", amt: total_loan}];

  /* Pie */
    var svg = d3.select("svg") //.attr("id","deleteMe")
    ,width = svg.attr("width"),
    height = svg.attr("height"),
    radius = Math.min(width, height) / 2.5;
    
    //The <g> SVG element is a container used to group other SVG elements.
    var g = svg.append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // set the color scale  
    var color = d3.scaleOrdinal([
          'green', 'red'
      ]);

    // Compute the position of each group on the pie:   
    var pie = d3.pie().value(function(d) { 
          return d.amt; 
      });
    //radius for the arc   
    var path = d3.arc()
          .outerRadius(radius - 10).innerRadius(0);
    
    //radius for the label      
    var label = d3.arc()
          .outerRadius(radius).innerRadius(radius - 110);
        
        console.log(data);
          
        // Build the pie chart.
        var arc = g.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d) { return color(d.data.transactionType); });
                
        arc.append("text").attr("transform", function(d) { 
            return "translate(" + label.centroid(d) + ")"; 
    })
          
          .text(function(d) { return `${d.data.transactionType} 
          ($ ${d.data.amt})`; });

    svg.append("g")
          .attr("transform", "translate(" + (width / 2 - 100) + "," + 25 + ")")
          .append("text").text("Total - Deposit vs Loan")
          .attr("class", "title")
        }
  //pie chart end

function init() {
  list.innerHTML = '';
  reco.innerHTML = '';
  TransactionData = [...TransactionDataAll];
  TransactionData.forEach(addTransactionDOM);
  updateValues();
}

function filterTransaction(e) {
  e.preventDefault();  //to prevent form from submitting and refreshing the page
  list.innerHTML = '';
  reco.innerHTML = '';
  TransactionData = TransactionDataAll.filter(tran => tran.customername == custname.value);  
  TransactionData.forEach(addTransactionDOM);
  updateValues(); 
}

function checkUserPassword(e) {
  if((user.value == "abc") && 
  pwd.value =="123")
  {
  user.value = '';
  pwd.value = '';
  filterTransaction(e);
 }
}

form.addEventListener('submit', checkUserPassword);