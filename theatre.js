const generalTicketPrice = 20;
    const discountTicketPrice = 10;
    const matineeDiscount = 3;

    function buyTicket(){
      const age = prompt('What is your age?');
      let cost = getBaseTicketCost(age);

      const isMatinee = prompt('Are you attending matinee show?');
        cost = applyMatineeDiscount(cost, isMatinee)
      
      alert("Your ticket will cost: $" + cost)
    }

    function getBaseTicketCost(age){
      if (age <= 12 || age >= 65){
        return discountTicketPrice;
      }
      return generalTicketPrice;
    }

    function applyMatineeDiscount(cost, isMatinee){
      if(isMatinee.toLowerCase() === 'yes' || isMatinee.toLowerCase() === 'y'){
        return  cost - matineeDiscount;
      }
      return cost;
    }