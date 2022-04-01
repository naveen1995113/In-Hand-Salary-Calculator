const ProfessionalTax = (selectedState: string, Basic_Salary: number) => {
  let ProfessionTax = 0;
  //AP
  if (selectedState === "Andhra Pradesh") {
    if (Basic_Salary <= 15000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 15000 && Basic_Salary <= 20000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 20000) {
      ProfessionTax = 200;
    }
  }
  //Assam
  if (selectedState === "Assam") {
    if (Basic_Salary <= 10000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 10000 && Basic_Salary <= 15000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 15000 && Basic_Salary <= 25000) {
      ProfessionTax = 180;
    } else if (Basic_Salary > 25000) {
      ProfessionTax = 208;
    }
  }
  //Bihar
  if (selectedState === "Bihar") {
    if (Basic_Salary <= 25000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 25000 && Basic_Salary <= 41666) {
      ProfessionTax = 83.33;
    } else if (Basic_Salary > 41666 && Basic_Salary <= 83333) {
      ProfessionTax = 166.67;
    } else if (Basic_Salary > 83333) {
      ProfessionTax = 208.33;
    }
  }

  //Goa
  if (selectedState === "Goa") {
    if (Basic_Salary <= 15000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 15000 && Basic_Salary <= 25000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 25000) {
      ProfessionTax = 200;
    }
  }
  //Gujarat
  if (selectedState === "Gujarat") {
    if (Basic_Salary <= 6000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 6000 && Basic_Salary <= 9000) {
      ProfessionTax = 80;
    } else if (Basic_Salary > 9000 && Basic_Salary <= 12000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 12000) {
      ProfessionTax = 200;
    }
  }
  //Jharkhand
  if (selectedState === "Jharkhand") {
    if (Basic_Salary <= 25000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 25000 && Basic_Salary <= 41666) {
      ProfessionTax = 100;
    } else if (Basic_Salary > 41666 && Basic_Salary <= 66666) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 66666 && Basic_Salary <= 83333) {
      ProfessionTax = 175;
    } else if (Basic_Salary > 83333) {
      ProfessionTax = 208;
    }
  }
  //Karnataka
  if (selectedState === "Karnataka") {
    if (Basic_Salary <= 15000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 15000) {
      ProfessionTax = 200;
    }
  }

  //Kerala
  if (selectedState === "Kerala") {
    if (Basic_Salary < 1999) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 1999 && Basic_Salary <= 2999) {
      ProfessionTax = 120 / 6;
    } else if (Basic_Salary > 2999 && Basic_Salary <= 4999) {
      ProfessionTax = 180 / 6;
    } else if (Basic_Salary > 4999 && Basic_Salary <= 7499) {
      ProfessionTax = 300 / 6;
    } else if (Basic_Salary > 7499 && Basic_Salary <= 12499) {
      ProfessionTax = 600 / 6;
    } else if (Basic_Salary > 12499 && Basic_Salary <= 16666) {
      ProfessionTax = 750 / 6;
    } else if (Basic_Salary > 16666 && Basic_Salary <= 20833) {
      ProfessionTax = 1000 / 6;
    } else if (Basic_Salary > 20833) {
      ProfessionTax = 1250 / 6;
    }
  }

  // Madhya Pradesh
  if (selectedState === "Madhya Pradesh") {
    let Salary = Basic_Salary * 12;
    console.log("MP:" + Basic_Salary);
    if (Salary <= 150000) {
      ProfessionTax = 0;
    } else if (Salary > 150000 && Salary <= 180000) {
      ProfessionTax = 125;
    } else if (Salary > 180000) {
      ProfessionTax = 208;
    }
  }

  //Maharashtra
  if (selectedState === "Maharashtra") {
    if (Basic_Salary <= 7500) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 7500 && Basic_Salary <= 10000) {
      ProfessionTax = 175;
    } else if (Basic_Salary > 10000) {
      ProfessionTax = 200;
    }
  }
  //Meghalaya
  if (selectedState === "Meghalaya") {
    let Salary = Basic_Salary * 12;
    if (Salary <= 50000) {
      ProfessionTax = 0;
    } else if (Salary > 50000 && Salary <= 75000) {
      ProfessionTax = 200 / 12;
    } else if (Salary > 75000 && Salary <= 100000) {
      ProfessionTax = 300 / 12;
    } else if (Salary > 100000 && Salary <= 150000) {
      ProfessionTax = 500 / 12;
    } else if (Salary > 150000 && Salary <= 200000) {
      ProfessionTax = 750 / 12;
    } else if (Salary > 200000 && Salary <= 250000) {
      ProfessionTax = 1000 / 12;
    } else if (Salary > 250000 && Salary <= 300000) {
      ProfessionTax = 1250 / 12;
    } else if (Salary > 300000 && Salary <= 350000) {
      ProfessionTax = 1500 / 12;
    } else if (Salary > 350000 && Salary <= 400000) {
      ProfessionTax = 1800 / 12;
    } else if (Salary > 400000 && Salary <= 450000) {
      ProfessionTax = 2100 / 12;
    } else if (Salary > 450000 && Salary <= 500000) {
      ProfessionTax = 2400 / 12;
    } else if (Salary > 50000) {
      ProfessionTax = 2500 / 12;
    }
  }

  //Orissa
  if (selectedState === "Orissa") {
    if (Basic_Salary <= 5000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 5000 && Basic_Salary <= 6000) {
      ProfessionTax = 30;
    } else if (Basic_Salary > 6000 && Basic_Salary <= 8000) {
      ProfessionTax = 50;
    } else if (Basic_Salary > 8000 && Basic_Salary <= 10000) {
      ProfessionTax = 75;
    } else if (Basic_Salary > 10000 && Basic_Salary <= 15000) {
      ProfessionTax = 100;
    } else if (Basic_Salary > 15000 && Basic_Salary <= 20000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 20000) {
      ProfessionTax = 200;
    }
  }
  //Sikkim
  if (selectedState === "Sikkim") {
    if (Basic_Salary <= 15000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 15000 && Basic_Salary <= 30000) {
      ProfessionTax = 125;
    } else if (Basic_Salary > 30000 && Basic_Salary <= 40000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 40000) {
      ProfessionTax = 200;
    }
  }

  //Tamil Nadu
  if (selectedState === "Tamil Nadu") {
    let Salary = Basic_Salary * 6;
    if (Salary <= 21000) {
      ProfessionTax = 0;
    } else if (Salary > 21000 && Salary <= 30000) {
      ProfessionTax = 100 / 6;
    } else if (Salary > 30000 && Salary <= 45000) {
      ProfessionTax = 235 / 6;
    } else if (Salary > 45000 && Salary <= 60000) {
      ProfessionTax = 510 / 6;
    } else if (Salary > 60000 && Salary <= 75000) {
      ProfessionTax = 760 / 6;
    } else if (Salary > 75000) {
      ProfessionTax = 1095 / 6;
    }
  }

  //Telangana
  if (selectedState === "Telangana") {
    if (Basic_Salary <= 15000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 15000 && Basic_Salary <= 20000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 20000) {
      ProfessionTax = 200;
    }
  }

  //Tripura
  if (selectedState === "Tripura") {
    if (Basic_Salary <= 5000) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 5000 && Basic_Salary <= 7000) {
      ProfessionTax = 420 / 6;
    } else if (Basic_Salary > 7000 && Basic_Salary <= 9000) {
      ProfessionTax = 720 / 6;
    } else if (Basic_Salary > 9000 && Basic_Salary <= 12000) {
      ProfessionTax = 840 / 6;
    } else if (Basic_Salary > 12000 && Basic_Salary <= 15000) {
      ProfessionTax = 1140 / 6;
    } else if (Basic_Salary > 15000) {
      ProfessionTax = 1248 / 6;
    }
  }

  //West Bengal
  if (selectedState === "West Bengal") {
    if (Basic_Salary <= 8500) {
      ProfessionTax = 0;
    } else if (Basic_Salary > 8500 && Basic_Salary <= 10000) {
      ProfessionTax = 90;
    } else if (Basic_Salary > 10000 && Basic_Salary <= 15000) {
      ProfessionTax = 110;
    } else if (Basic_Salary > 15000 && Basic_Salary <= 25000) {
      ProfessionTax = 130;
    } else if (Basic_Salary > 25000 && Basic_Salary <= 40000) {
      ProfessionTax = 150;
    } else if (Basic_Salary > 40000) {
      ProfessionTax = 200;
    }
  }
  return ProfessionTax;
};
export default ProfessionalTax;
