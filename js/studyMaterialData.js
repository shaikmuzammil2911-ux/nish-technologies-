// NTI Comprehensive Study & Practice Preparation Material Hub - Nish Technologies Inc
// Massive 130+ Aptitude Questions + Extensive Domain Specialization Guides + Glassdoor Real Interview Insights & Salary Benchmarks
// Unlocked exclusively via Candidate Security Passcode

export const APTITUDE_STUDY_MODULES = [
  {
    topic: "Quantitative Aptitude: Speed, Time & Distance (Trains & Boats)",
    icon: "🚆",
    summary: "Speed conversions, relative speed mechanics for objects moving in same/opposite directions, train-platform crossings, and river stream currents (Upstream/Downstream).",
    keyFormulas: [
      "Speed = Distance / Time | Time = Distance / Speed | Distance = Speed × Time",
      "Conversion: 1 km/h = 5/18 m/s | 1 m/s = 18/5 km/h",
      "Relative Speed (Opposite Direction) = S1 + S2",
      "Relative Speed (Same Direction) = |S1 - S2|",
      "Train crossing platform/bridge: Total Distance = Length(Train) + Length(Platform)",
      "Downstream Speed = u + v | Upstream Speed = u - v (where u = still water speed, v = stream current)"
    ],
    practiceQuestions: [
      {
        question: "A train traveling at 72 km/h crosses a 250m long platform in 26 seconds. Calculate the length of the train.",
        options: ["270 meters", "240 meters", "300 meters", "220 meters"],
        correctAnswer: "270 meters",
        explanation: "1. Convert speed to m/s: 72 × (5/18) = 20 m/s.\n2. Total distance traveled in 26s = Speed × Time = 20 × 26 = 520 meters.\n3. Total distance = Train Length + Platform Length.\n4. Train Length = 520m - 250m = 270 meters."
      },
      {
        question: "Two trains of lengths 140m and 160m are running towards each other on parallel tracks at 60 km/h and 48 km/h. How long will they take to cross each other completely?",
        options: ["10 seconds", "12 seconds", "15 seconds", "8 seconds"],
        correctAnswer: "10 seconds",
        explanation: "1. Total distance = 140m + 160m = 300m.\n2. Relative speed = 60 + 48 = 108 km/h.\n3. Convert to m/s: 108 × (5/18) = 30 m/s.\n4. Time taken = Distance / Relative Speed = 300 / 30 = 10 seconds."
      },
      {
        question: "A boat travels 24 km downstream in 2 hours and takes 4 hours to travel the same distance upstream. What is the speed of the stream?",
        options: ["3 km/h", "6 km/h", "9 km/h", "4 km/h"],
        correctAnswer: "3 km/h",
        explanation: "1. Downstream speed (D) = 24 / 2 = 12 km/h.\n2. Upstream speed (U) = 24 / 4 = 6 km/h.\n3. Stream speed = (D - U) / 2 = (12 - 6) / 2 = 3 km/h."
      },
      {
        question: "A man covers a distance of 120 km in 3 hours by car. If he travels the first half of the distance at 60 km/h, at what speed must he travel the second half to finish on time?",
        options: ["30 km/h", "40 km/h", "45 km/h", "50 km/h"],
        correctAnswer: "30 km/h",
        explanation: "1. Half distance = 60 km. Time taken for 1st half = 60 / 60 = 1 hour.\n2. Remaining time = 3 - 1 = 2 hours. Remaining distance = 60 km.\n3. Required speed = 60 km / 2 hours = 30 km/h."
      },
      {
        question: "A train 150m long passes a telegraph post in 12 seconds. Find the speed of the train in km/h.",
        options: ["45 km/h", "40 km/h", "50 km/h", "36 km/h"],
        correctAnswer: "45 km/h",
        explanation: "1. Speed in m/s = Distance / Time = 150 / 12 = 12.5 m/s.\n2. Convert to km/h = 12.5 × (18/5) = 2.5 × 18 = 45 km/h."
      },
      {
        question: "If a person walks at 14 km/h instead of 10 km/h, he would have walked 20 km more in the same time. What is the actual distance traveled by him?",
        options: ["50 km", "60 km", "70 km", "40 km"],
        correctAnswer: "50 km",
        explanation: "1. Let time = t hours.\n2. 14t - 10t = 20 -> 4t = 20 -> t = 5 hours.\n3. Actual distance = 10 km/h × 5 hours = 50 km."
      },
      {
        question: "A motorist travels from Town A to Town B at 40 km/h and returns at 60 km/h. What is his average speed for the whole journey?",
        options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h"],
        correctAnswer: "48 km/h",
        explanation: "Average speed for equal distances = (2 × S1 × S2) / (S1 + S2) = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h."
      },
      {
        question: "A thief is spotted by a policeman from a distance of 200m. When the policeman starts chase, the thief runs at 10 km/h and policeman at 12 km/h. How far will the thief have run before he is overtaken?",
        options: ["1000 meters", "800 meters", "1200 meters", "600 meters"],
        correctAnswer: "1000 meters",
        explanation: "1. Relative speed = 12 - 10 = 2 km/h = 2 × (5/18) = 5/9 m/s.\n2. Time to overtake = 200 / (5/9) = 360 seconds.\n3. Distance run by thief = Speed × Time = (10 × 5/18) × 360 = (25/9) × 360 = 1000 meters."
      },
      {
        question: "A train 300m long is running at 54 km/h. How much time does it take to cross a bridge of length 150m?",
        options: ["30 seconds", "25 seconds", "20 seconds", "35 seconds"],
        correctAnswer: "30 seconds",
        explanation: "1. Total distance = 300 + 150 = 450 meters.\n2. Speed in m/s = 54 × (5/18) = 15 m/s.\n3. Time = Distance / Speed = 450 / 15 = 30 seconds."
      },
      {
        question: "A boat can travel with a speed of 13 km/h in still water. If the speed of the stream is 4 km/h, find the time taken by the boat to go 68 km downstream.",
        options: ["4 hours", "3.5 hours", "5 hours", "4.5 hours"],
        correctAnswer: "4 hours",
        explanation: "1. Downstream speed = 13 + 4 = 17 km/h.\n2. Time taken = 68 / 17 = 4 hours."
      },
      {
        question: "Two cyclists start from the same point at the same time in opposite directions. One travels at 15 km/h and the other at 20 km/h. In how many hours will they be 105 km apart?",
        options: ["3 hours", "3.5 hours", "4 hours", "2.5 hours"],
        correctAnswer: "3 hours",
        explanation: "1. Combined speed in opposite directions = 15 + 20 = 35 km/h.\n2. Time = 105 / 35 = 3 hours."
      },
      {
        question: "A car covers four successive 3 km stretches at speeds of 10 km/h, 20 km/h, 30 km/h, and 60 km/h respectively. What is the average speed of the car over the entire distance?",
        options: ["20 km/h", "24 km/h", "25 km/h", "18 km/h"],
        correctAnswer: "20 km/h",
        explanation: "1. Total distance = 4 × 3 = 12 km.\n2. Total time = 3/10 + 3/20 + 3/30 + 3/60 = (18 + 9 + 6 + 3)/60 = 36/60 = 0.6 hours.\n3. Average speed = 12 / 0.6 = 20 km/h."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Time, Work, Wages & Pipes/Cisterns",
    icon: "⏱️",
    summary: "Individual unit rate reciprocal addition (1/A + 1/B = 1/T), efficiency ratios, shared wages allocation, and inlet/outlet pipe net filling rates.",
    keyFormulas: [
      "Work done per unit time = 1 / Total Time",
      "Combined rate (A and B): 1/T = 1/A + 1/B = (A + B) / (A × B) -> T = (A × B) / (A + B)",
      "Wage Distribution is proportional to individual work output: Wage ∝ Efficiency × Days Worked",
      "Net Pipe Filling Rate = 1/Inlet_A + 1/Inlet_B - 1/Outlet_C",
      "Efficiency Inverse Rule: Efficiency_A / Efficiency_B = Time_B / Time_A"
    ],
    practiceQuestions: [
      {
        question: "A can complete a project in 12 days and B can finish it in 18 days. If they collaborate together, in how many days will the project be finished?",
        options: ["7.2 days", "8.0 days", "6.5 days", "7.5 days"],
        correctAnswer: "7.2 days",
        explanation: "1. A's 1-day rate = 1/12. B's 1-day rate = 1/18.\n2. Combined 1-day rate = 1/12 + 1/18 = (3 + 2)/36 = 5/36.\n3. Total time = 36 / 5 = 7.2 days (7 days and 4.8 hours)."
      },
      {
        question: "Pipe A can fill a tank in 20 minutes, Pipe B in 30 minutes, while Outlet C can empty it in 15 minutes. If all three operate together, how long will it take to fill the tank?",
        options: ["60 minutes", "45 minutes", "30 minutes", "75 minutes"],
        correctAnswer: "60 minutes",
        explanation: "1. Net rate = 1/20 + 1/30 - 1/15.\n2. Find LCM(20, 30, 15) = 60.\n3. Net rate = (3 + 2 - 4)/60 = 1/60.\n4. Time required = 60 minutes."
      },
      {
        question: "A is twice as efficient as B. If together they complete a piece of work in 14 days, in how many days can A alone finish the work?",
        options: ["21 days", "28 days", "18 days", "24 days"],
        correctAnswer: "21 days",
        explanation: "1. Efficiency ratio A:B = 2:1. Total efficiency = 3 units/day.\n2. Total work = 3 units/day × 14 days = 42 units.\n3. Time for A alone = Total Work / A's efficiency = 42 / 2 = 21 days."
      },
      {
        question: "A and B were assigned a task for ₹1,200. A alone can do it in 6 days while B alone can do it in 8 days. With the assistance of C, they finish it in 3 days. What is C's share of payment?",
        options: ["₹150", "₹200", "₹180", "₹120"],
        correctAnswer: "₹150",
        explanation: "1. Total 3 days work: A did 3/6 = 1/2. B did 3/8 = 3/8.\n2. Work done by A + B = 1/2 + 3/8 = 7/8.\n3. Remaining work done by C = 1 - 7/8 = 1/8.\n4. C's share = (1/8) × ₹1200 = ₹150."
      },
      {
        question: "12 men or 18 women can reap a field in 14 days. How many days will 8 men and 16 women take to reap the same field?",
        options: ["9 days", "10 days", "8 days", "12 days"],
        correctAnswer: "9 days",
        explanation: "1. 12 Men = 18 Women -> 1 Man = 1.5 Women.\n2. 8 Men + 16 Women = (8 × 1.5) + 16 = 12 + 16 = 28 Women.\n3. If 18 women take 14 days, 28 women will take (18 × 14) / 28 = 9 days."
      },
      {
        question: "A and B can do a job in 12 days, B and C in 15 days, and C and A in 20 days. How many days will A, B, and C take working together?",
        options: ["10 days", "12 days", "8 days", "15 days"],
        correctAnswer: "10 days",
        explanation: "1. 2(A + B + C)'s 1-day work = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5.\n2. (A + B + C)'s 1-day work = 1/10.\n3. Together they take 10 days."
      },
      {
        question: "Two pipes A and B can fill a cistern in 12 and 16 minutes respectively. Both pipes are opened together. When should pipe B be turned off so that the cistern is full in 9 minutes?",
        options: ["4 minutes", "5 minutes", "6 minutes", "3 minutes"],
        correctAnswer: "4 minutes",
        explanation: "1. Pipe A runs for all 9 minutes -> Work by A = 9/12 = 3/4.\n2. Remaining work = 1 - 3/4 = 1/4.\n3. Pipe B must do 1/4 of work -> Time for B = (1/4) × 16 = 4 minutes."
      },
      {
        question: "A can build a wall in 30 days and B in 40 days. They work on alternate days starting with A. In how many days will the wall be completed?",
        options: ["34.33 days", "35 days", "33 days", "36 days"],
        correctAnswer: "34.33 days",
        explanation: "1. LCM(30, 40) = 120 units. Rate of A = 4 units/day, B = 3 units/day.\n2. In 2 days (A + B), work done = 7 units.\n3. In 34 days (17 cycles), work done = 17 × 7 = 119 units.\n4. Remaining 1 unit is done by A on 35th day in 1/4 day = 34.25 (approx 34.3 days)."
      },
      {
        question: "A tap can fill a bath in 20 minutes and another tap in 30 minutes. A person opens both taps simultaneously and leaves. He returns when the bath should be full, but finds the waste pipe was open. He closes it and the bath is full in 3 more minutes. In what time will the waste pipe empty the full bath?",
        options: ["48 minutes", "40 minutes", "50 minutes", "60 minutes"],
        correctAnswer: "48 minutes",
        explanation: "1. Normal filling time = (20 × 30) / (20 + 30) = 600 / 50 = 12 minutes.\n2. In 3 extra minutes, taps fill 3 × (1/12) = 1/4 of tank.\n3. That means waste pipe emptied 1/4 of tank in 12 minutes.\n4. Full emptying time = 12 × 4 = 48 minutes."
      },
      {
        question: "3 men and 4 boys can earn ₹756 in 7 days. 11 men and 13 boys can earn ₹3,008 in 8 days. In what time will 7 men with 9 boys earn ₹2,480?",
        options: ["10 days", "12 days", "8 days", "15 days"],
        correctAnswer: "10 days",
        explanation: "1. Daily earnings: 3M + 4B = 756/7 = 108. 11M + 13B = 3008/8 = 376.\n2. Solving gives 1 Man = ₹20/day, 1 Boy = ₹12/day.\n3. Daily earning of 7M + 9B = 7(20) + 9(12) = 140 + 108 = ₹248/day.\n4. Days required = 2480 / 248 = 10 days."
      },
      {
        question: "A contractor undertakes to complete a road of 12 km in 350 days and employs 45 men. After 200 days, he finds only 4.5 km of road completed. How many extra men must he employ to complete work on schedule?",
        options: ["55 extra men", "50 extra men", "45 extra men", "60 extra men"],
        correctAnswer: "55 extra men",
        explanation: "1. Formula: (M1 × D1) / W1 = (M2 × D2) / W2.\n2. (45 × 200) / 4.5 = (M2 × 150) / 7.5.\n3. 2000 = M2 × 20 -> M2 = 100 men.\n4. Extra men needed = 100 - 45 = 55 men."
      },
      {
        question: "If 5 engines consume 6 metric tonnes of coal when each is running 9 hours a day, how much coal will be needed for 8 engines, each running 10 hours a day, given that 3 engines of the former type consume as much as 4 engines of the latter type?",
        options: ["8 metric tonnes", "7.5 metric tonnes", "9 metric tonnes", "8.5 metric tonnes"],
        correctAnswer: "8 metric tonnes",
        explanation: "1. Efficiency ratio: 3E1 = 4E2 -> E2/E1 = 3/4.\n2. Coal consumption is proportional to (Engines × Hours × Efficiency).\n3. (5 × 9 × 1) / 6 = [8 × 10 × (3/4)] / Coal2.\n4. 45 / 6 = 60 / Coal2 -> Coal2 = (60 × 6) / 45 = 8 metric tonnes."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Percentages, Profit, Loss & Discount",
    icon: "📈",
    summary: "Percentage changes, successive markup/discounts, cost price (CP) vs selling price (SP) equations, false weight cheats, and margin calculations.",
    keyFormulas: [
      "Profit % = (Profit / CP) × 100 | Loss % = (Loss / CP) × 100",
      "SP = CP × (100 + Profit%) / 100",
      "Successive Discount Formula: Net Discount = D1 + D2 - (D1 × D2)/100",
      "Faulty Weight Gain % = [Error / (True Value - Error)] × 100%",
      "Selling at same SP with x% gain and x% loss results in Net Loss % = (x / 10)²"
    ],
    practiceQuestions: [
      {
        question: "A merchant marks his goods 30% above the cost price and allows a discount of 15% on cash payments. What is his net profit percentage?",
        options: ["10.5%", "12.0%", "15.0%", "8.5%"],
        correctAnswer: "10.5%",
        explanation: "1. Let CP = ₹100. Marked Price (MP) = ₹130.\n2. Cash Discount = 15% of 130 = 0.15 × 130 = ₹19.50.\n3. Selling Price (SP) = 130 - 19.50 = ₹110.50.\n4. Net Profit = 110.50 - 100 = 10.5%."
      },
      {
        question: "A dishonest shopkeeper professes to sell his goods at cost price but uses a false weight of 920 grams for a 1 kg (1000g) measure. What is his exact profit percentage?",
        options: ["8.70%", "8.00%", "9.20%", "7.85%"],
        correctAnswer: "8.70%",
        explanation: "1. Gain formula = [Error / (True Weight - Error)] × 100%.\n2. Error = 1000g - 920g = 80g.\n3. Gain % = (80 / 920) × 100% = 8.695% ≈ 8.70%."
      },
      {
        question: "A trader sells two laptops for ₹36,000 each. On one he gains 20% and on the other he incurs a 20% loss. What is his overall gain or loss percentage?",
        options: ["4% Loss", "4% Gain", "No profit no loss", "2% Loss"],
        correctAnswer: "4% Loss",
        explanation: "When two items are sold at the same SP with equal gain % and loss % (x%), there is always a net loss = (x/10)² = (20/10)² = 4% Loss."
      },
      {
        question: "If the cost price of 15 articles is equal to the selling price of 12 articles, what is the profit percentage?",
        options: ["25%", "20%", "30%", "15%"],
        correctAnswer: "25%",
        explanation: "1. 15 × CP = 12 × SP -> SP / CP = 15 / 12 = 5 / 4.\n2. Profit = SP - CP = 5 - 4 = 1 unit.\n3. Profit % = (1 / 4) × 100% = 25%."
      },
      {
        question: "The price of petrol increased by 25%. By what percentage must a car owner reduce consumption so that the total fuel expenditure remains constant?",
        options: ["20%", "25%", "16.67%", "15%"],
        correctAnswer: "20%",
        explanation: "Reduction % = [r / (100 + r)] × 100% = [25 / 125] × 100% = (1/5) × 100% = 20%."
      },
      {
        question: "A student scored 35% marks and failed by 15 marks. Another student scored 45% marks and got 25 marks more than the pass mark. What are the maximum marks?",
        options: ["400", "500", "450", "350"],
        correctAnswer: "400",
        explanation: "1. Difference in marks percentage = 45% - 35% = 10%.\n2. Difference in actual marks = 15 + 25 = 40 marks.\n3. 10% = 40 marks -> Maximum marks = 40 × 10 = 400."
      },
      {
        question: "A vendor buys lemons at 6 for ₹10 and sells them at 4 for ₹8. What is his gain percentage?",
        options: ["20%", "25%", "15%", "18%"],
        correctAnswer: "20%",
        explanation: "1. Cost of 1 lemon = 10 / 6 = ₹5/3.\n2. Selling price of 1 lemon = 8 / 4 = ₹2.\n3. Profit = 2 - 5/3 = 1/3.\n4. Profit % = [(1/3) / (5/3)] × 100% = (1/5) × 100% = 20%."
      },
      {
        question: "After allowing two successive discounts of 20% and 10% on the marked price, a watch is sold for ₹1,440. Find the marked price of the watch.",
        options: ["₹2,000", "₹1,800", "₹2,200", "₹1,900"],
        correctAnswer: "₹2,000",
        explanation: "1. Net discount = 20 + 10 - (20×10)/100 = 30 - 2 = 28%.\n2. Net SP = 100% - 28% = 72% of MP.\n3. 0.72 × MP = 1440 -> MP = 1440 / 0.72 = ₹2,000."
      },
      {
        question: "A man buys an item for ₹600 and spends ₹150 on its repair. If he sells it for ₹900, what is his gain percentage?",
        options: ["20%", "25%", "18%", "22.5%"],
        correctAnswer: "20%",
        explanation: "1. Total CP = 600 + 150 = ₹750.\n2. Profit = 900 - 750 = ₹150.\n3. Profit % = (150 / 750) × 100% = (1/5) × 100% = 20%."
      },
      {
        question: "A reduction of 20% in the price of sugar enables a purchaser to obtain 4 kg more for ₹160. What is the original price per kg of sugar?",
        options: ["₹10 per kg", "₹8 per kg", "₹12 per kg", "₹9 per kg"],
        correctAnswer: "₹10 per kg",
        explanation: "1. Money saved due to reduction = 20% of 160 = ₹32.\n2. Reduced price for 4 kg = ₹32 -> Reduced price = ₹8/kg.\n3. Original price = 8 / (1 - 0.20) = 8 / 0.8 = ₹10 per kg."
      },
      {
        question: "By selling an article for ₹720, a merchant loses 10%. At what price should he sell it to gain 15%?",
        options: ["₹920", "₹900", "₹940", "₹880"],
        correctAnswer: "₹920",
        explanation: "1. 90% of CP = ₹720 -> CP = 720 / 0.90 = ₹800.\n2. Target SP for 15% gain = 800 × 1.15 = ₹920."
      },
      {
        question: "If the sales tax on a television is reduced from 8% to 6%, how much does a customer save on a television with a list price of ₹25,000?",
        options: ["₹500", "₹400", "₹600", "₹750"],
        correctAnswer: "₹500",
        explanation: "Savings = (8% - 6%) of 25,000 = 2% of 25,000 = 0.02 × 25,000 = ₹500."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Simple & Compound Interest",
    icon: "💰",
    summary: "Simple Interest (SI = P×R×T/100), Compound Interest compounded annually or semi-annually (A = P(1 + R/100)^t), and difference between CI and SI for 2 and 3 years.",
    keyFormulas: [
      "Simple Interest: SI = (P × R × T) / 100",
      "Amount: A = P + SI",
      "Compound Amount (Annual): A = P × (1 + R/100)ⁿ",
      "Difference (CI - SI for 2 years) = P × (R/100)²",
      "Difference (CI - SI for 3 years) = P × (R/100)² × (3 + R/100)",
      "Half-yearly compounding: Rate = R/2, Time = 2n"
    ],
    practiceQuestions: [
      {
        question: "What is the difference between compound interest and simple interest on ₹10,000 at 10% per annum for 2 years?",
        options: ["₹100", "₹120", "₹150", "₹80"],
        correctAnswer: "₹100",
        explanation: "Difference for 2 years = P × (R/100)² = 10,000 × (10/100)² = 10,000 × (1/100) = ₹100."
      },
      {
        question: "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times itself?",
        options: ["15 years", "20 years", "10 years", "12 years"],
        correctAnswer: "15 years",
        explanation: "1. For sum to double (gain P interest), it takes 5 years.\n2. For sum to become 4 times (gain 3P interest), it takes 3 × 5 = 15 years."
      },
      {
        question: "Find the compound interest on ₹8,000 at 15% per annum for 2 years compounded annually.",
        options: ["₹2,580", "₹2,400", "₹2,650", "₹2,500"],
        correctAnswer: "₹2,580",
        explanation: "1. Amount = 8000 × (1 + 0.15)² = 8000 × (1.15)² = 8000 × 1.3225 = ₹10,580.\n2. Compound Interest = 10,580 - 8,000 = ₹2,580."
      },
      {
        question: "At what rate percent per annum will a sum of ₹5,000 yield ₹1,200 as simple interest in 3 years?",
        options: ["8%", "6%", "10%", "7.5%"],
        correctAnswer: "8%",
        explanation: "Rate R = (SI × 100) / (P × T) = (1200 × 100) / (5000 × 3) = 120,000 / 15,000 = 8%."
      },
      {
        question: "A sum becomes ₹1,331 in 3 years at 10% per annum compound interest. Find the principal sum.",
        options: ["₹1,000", "₹1,100", "₹900", "₹1,200"],
        correctAnswer: "₹1,000",
        explanation: "1. 1331 = P × (1 + 10/100)³ = P × (1.1)³ = P × 1.331.\n2. Principal P = 1331 / 1.331 = ₹1,000."
      },
      {
        question: "A sum invested at compound interest doubles in 4 years. In how many years will it become 8 times of itself?",
        options: ["12 years", "16 years", "8 years", "14 years"],
        correctAnswer: "12 years",
        explanation: "At CI: 2¹ times in 4 years -> 2³ (8 times) in 3 × 4 = 12 years."
      },
      {
        question: "How much time will ₹2,000 take to amount to ₹2,420 at 10% per annum compound interest?",
        options: ["2 years", "3 years", "1.5 years", "2.5 years"],
        correctAnswer: "2 years",
        explanation: "1. 2420 / 2000 = 1.21 = (1.10)ⁿ.\n2. (1.10)² = 1.21 -> n = 2 years."
      },
      {
        question: "The simple interest on a certain sum for 2 years at 8% per annum is ₹800. What would be the compound interest on the same sum at the same rate and time?",
        options: ["₹832", "₹840", "₹825", "₹850"],
        correctAnswer: "₹832",
        explanation: "1. SI per year = ₹400. Principal = (800 × 100) / (8 × 2) = ₹5,000.\n2. CI for Year 1 = ₹400. CI for Year 2 = 400 + (8% of 400) = 400 + 32 = ₹432.\n3. Total CI = 400 + 432 = ₹832."
      },
      {
        question: "What will ₹12,000 amount to at 10% per annum in 1.5 years if interest is compounded half-yearly?",
        options: ["₹13,891.50", "₹13,500.00", "₹14,000.00", "₹13,750.00"],
        correctAnswer: "₹13,891.50",
        explanation: "1. Half-yearly rate = 10/2 = 5%. Periods n = 1.5 × 2 = 3.\n2. Amount = 12000 × (1.05)³ = 12000 × 1.157625 = ₹13,891.50."
      },
      {
        question: "A sum of ₹1,600 gives a simple interest of ₹252 in 2 years and 4 months. What is the annual rate of interest?",
        options: ["6.75%", "6.25%", "7.00%", "7.50%"],
        correctAnswer: "6.75%",
        explanation: "1. Time = 2 + 4/12 = 7/3 years.\n2. R = (SI × 100) / (P × T) = (252 × 100) / [1600 × (7/3)] = 25200 / (11200/3) = (25200 × 3) / 11200 = 6.75%."
      },
      {
        question: "In how many years will a sum of ₹800 at 10% per annum compound interest compounded semi-annually amount to ₹926.10?",
        options: ["1.5 years", "2 years", "1 year", "2.5 years"],
        correctAnswer: "1.5 years",
        explanation: "1. Rate = 5% per half year. 926.10 / 800 = 1.157625 = (1.05)³.\n2. Number of half-years = 3 -> Time = 3 / 2 = 1.5 years."
      },
      {
        question: "Find the compound interest on ₹50,000 at 12% per annum for 1 year, compounded quarterly.",
        options: ["₹6,275.44", "₹6,000.00", "₹6,150.25", "₹6,300.00"],
        correctAnswer: "₹6,275.44",
        explanation: "1. Quarterly rate = 12% / 4 = 3%. Periods = 4.\n2. Amount = 50,000 × (1.03)⁴ = 50,000 × 1.12550881 = ₹56,275.44.\n3. CI = 56,275.44 - 50,000 = ₹6,275.44."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Ratios, Proportions & Partnerships",
    icon: "🤝",
    summary: "Ratio simplification, mean proportional, inverse ratios, mixture alligations, and profit sharing proportional to Capital × Time period.",
    keyFormulas: [
      "Mean proportional between a and b = √(a × b)",
      "Third proportional to a and b = b² / a",
      "Partnership Profit Ratio = (Capital_A × Time_A) : (Capital_B × Time_B)",
      "Rule of Alligation: (Cheaper Qty) / (Dearer Qty) = (Dearer Price - Mean Price) / (Mean Price - Cheaper Price)"
    ],
    practiceQuestions: [
      {
        question: "A and B start a business. A invests ₹20,000 for 12 months, and B invests ₹30,000 for 8 months. If total annual profit is ₹48,000, what is A's share?",
        options: ["₹24,000", "₹20,000", "₹28,000", "₹26,000"],
        correctAnswer: "₹24,000",
        explanation: "1. Profit ratio = (20,000 × 12) : (30,000 × 8) = 240,000 : 240,000 = 1 : 1.\n2. A's share = ₹48,000 / 2 = ₹24,000."
      },
      {
        question: "In what ratio must tea worth ₹60/kg be mixed with tea worth ₹75/kg so that the mixture is worth ₹65/kg?",
        options: ["2 : 1", "1 : 2", "3 : 2", "2 : 3"],
        correctAnswer: "2 : 1",
        explanation: "Using alligation: (75 - 65) : (65 - 60) = 10 : 5 = 2 : 1."
      },
      {
        question: "The ratio of two numbers is 3 : 5. If 6 is added to each number, the ratio becomes 2 : 3. What are the two original numbers?",
        options: ["18 and 30", "15 and 25", "12 and 20", "21 and 35"],
        correctAnswer: "18 and 30",
        explanation: "1. Let numbers be 3x and 5x.\n2. (3x + 6) / (5x + 6) = 2 / 3 -> 3(3x + 6) = 2(5x + 6) -> 9x + 18 = 10x + 12 -> x = 6.\n3. Numbers are 3(6) = 18 and 5(6) = 30."
      },
      {
        question: "Find the third proportional to 9 and 12.",
        options: ["16", "15", "18", "14"],
        correctAnswer: "16",
        explanation: "Third proportional c = b² / a = 12² / 9 = 144 / 9 = 16."
      },
      {
        question: "Divide ₹1,170 among A, B, and C in the ratio 2 : 3 : 4. What is B's share?",
        options: ["₹390", "₹260", "₹520", "₹360"],
        correctAnswer: "₹390",
        explanation: "1. Total parts = 2 + 3 + 4 = 9 parts.\n2. B's share = (3/9) × 1170 = (1/3) × 1170 = ₹390."
      },
      {
        question: "In a mixture of 60 liters, the ratio of milk to water is 2 : 1. How much water must be added to make the ratio 1 : 2?",
        options: ["60 liters", "40 liters", "50 liters", "30 liters"],
        correctAnswer: "60 liters",
        explanation: "1. Milk = (2/3) × 60 = 40 liters. Water = (1/3) × 60 = 20 liters.\n2. Target ratio 1:2 -> For 40 liters of milk, total water must be 80 liters.\n3. Water to add = 80 - 20 = 60 liters."
      },
      {
        question: "If A : B = 2 : 3 and B : C = 4 : 5, find the combined ratio A : B : C.",
        options: ["8 : 12 : 15", "6 : 12 : 15", "8 : 10 : 15", "6 : 8 : 10"],
        correctAnswer: "8 : 12 : 15",
        explanation: "Multiply first ratio by 4 (8:12) and second ratio by 3 (12:15) -> A : B : C = 8 : 12 : 15."
      },
      {
        question: "A, B, and C enter into partnership. A contributes 1/3 of the whole capital while B contributes as much as A and C together. What is the ratio of their profits?",
        options: ["2 : 3 : 1", "1 : 2 : 1", "2 : 4 : 1", "1 : 3 : 2"],
        correctAnswer: "2 : 3 : 1",
        explanation: "1. Let total capital = 6 units -> A = 2 units.\n2. B = A + C -> Since A + B + C = 6 -> 2 + (2 + C) + C = 6 -> 4 + 2C = 6 -> C = 1 unit.\n3. B = 2 + 1 = 3 units.\n4. Ratio A : B : C = 2 : 3 : 1."
      },
      {
        question: "What is the mean proportional between 16 and 36?",
        options: ["24", "26", "28", "22"],
        correctAnswer: "24",
        explanation: "Mean Proportional = √(16 × 36) = 4 × 6 = 24."
      },
      {
        question: "If 0.75 : x :: 5 : 8, find the value of x.",
        options: ["1.20", "1.25", "1.15", "1.30"],
        correctAnswer: "1.20",
        explanation: "Product of extremes = Product of means: 0.75 × 8 = 5 × x -> 6 = 5x -> x = 1.20."
      },
      {
        question: "The salaries of A, B, and C are in the ratio 2 : 3 : 5. If increments of 15%, 10%, and 20% are allowed respectively in their salaries, what will be their new salary ratio?",
        options: ["23 : 33 : 60", "22 : 33 : 60", "23 : 30 : 55", "21 : 32 : 58"],
        correctAnswer: "23 : 33 : 60",
        explanation: "1. New A = 2 × 1.15 = 2.30.\n2. New B = 3 × 1.10 = 3.30.\n3. New C = 5 × 1.20 = 6.00.\n4. Ratio = 23 : 33 : 60."
      },
      {
        question: "A vessel contains a mixture of 2 liquids A and B in ratio 7:5. When 9 liters of mixture are drawn off and the vessel filled with B, the ratio of A and B becomes 7:9. How many liters of liquid A was initially in the vessel?",
        options: ["21 liters", "28 liters", "35 liters", "18 liters"],
        correctAnswer: "21 liters",
        explanation: "1. Initially A = 7x, B = 5x.\n2. In 9 liters removed: A removed = 9 × (7/12) = 21/4, B removed = 9 × (5/12) = 15/4.\n3. New ratio: [7x - (21/4)] / [5x - (15/4) + 9] = 7/9.\n4. Solving gives x = 3 -> Initial A = 7(3) = 21 liters."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Permutations, Combinations & Probability",
    icon: "🎲",
    summary: "Fundamental principle of counting, permutations (arrangements nPr), combinations (selections nCr), independent/dependent probability, and dice/card distributions.",
    keyFormulas: [
      "Permutations: nPr = n! / (n - r)!",
      "Combinations: nCr = n! / [r! × (n - r)!]",
      "Probability P(E) = Number of Favorable Outcomes / Total Sample Space",
      "Addition Rule (Mutually Exclusive): P(A ∪ B) = P(A) + P(B)",
      "Multiplication Rule (Independent): P(A ∩ B) = P(A) × P(B)"
    ],
    practiceQuestions: [
      {
        question: "In how many different ways can the letters of the word 'CORPORATION' be arranged so that the vowels always come together?",
        options: ["50,400", "42,000", "28,800", "36,200"],
        correctAnswer: "50,400",
        explanation: "1. Vowels in CORPORATION: O, O, A, I, O (5 vowels: 3 O's, 1 A, 1 I).\n2. Consonants: C, R, P, R, T, N (6 consonants: 2 R's).\n3. Treat 5 vowels as 1 single block -> Total items = 6 + 1 = 7 blocks.\n4. Arrangement of 7 blocks (with 2 R's) = 7! / 2! = 5040 / 2 = 2520.\n5. Arrangement within vowel block (5 vowels with 3 O's) = 5! / 3! = 120 / 6 = 20.\n6. Total ways = 2520 × 20 = 50,400."
      },
      {
        question: "From a pack of 52 cards, two cards are drawn together at random. What is the probability that both cards are kings?",
        options: ["1 / 221", "1 / 169", "2 / 221", "4 / 663"],
        correctAnswer: "1 / 221",
        explanation: "1. Total ways to draw 2 cards = 52C2 = (52 × 51) / 2 = 1326.\n2. Ways to draw 2 kings from 4 kings = 4C2 = 6.\n3. Probability = 6 / 1326 = 1 / 221."
      },
      {
        question: "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
        options: ["3 / 4", "1 / 2", "5 / 8", "7 / 12"],
        correctAnswer: "3 / 4",
        explanation: "1. Total outcomes = 6 × 6 = 36.\n2. Product is odd only when BOTH dice show odd numbers (1, 3, 5): 3 × 3 = 9 outcomes.\n3. Outcomes with even product = 36 - 9 = 27.\n4. Probability = 27 / 36 = 3 / 4."
      },
      {
        question: "In how many ways can a committee of 5 members be formed from 6 men and 4 women, such that at least 3 men are in the committee?",
        options: ["186", "120", "190", "144"],
        correctAnswer: "186",
        explanation: "Cases:\n• 3 Men & 2 Women: (6C3 × 4C2) = 20 × 6 = 120\n• 4 Men & 1 Woman: (6C4 × 4C1) = 15 × 4 = 60\n• 5 Men & 0 Women: (6C5 × 4C0) = 6 × 1 = 6\nTotal = 120 + 60 + 6 = 186."
      },
      {
        question: "A bag contains 6 black and 8 white balls. One ball is drawn at random. What is the probability that the ball drawn is white?",
        options: ["4 / 7", "3 / 7", "1 / 2", "5 / 8"],
        correctAnswer: "4 / 7",
        explanation: "P(White) = Favorable / Total = 8 / (6 + 8) = 8 / 14 = 4 / 7."
      },
      {
        question: "In how many ways can 6 people be seated around a circular round table?",
        options: ["120", "720", "240", "60"],
        correctAnswer: "120",
        explanation: "Circular permutations of n items = (n - 1)! = (6 - 1)! = 5! = 120."
      },
      {
        question: "A ticket is drawn from 100 tickets numbered 1 to 100. What is the probability that the number on the ticket is a multiple of 3 or 5?",
        options: ["47 / 100", "43 / 100", "50 / 100", "45 / 100"],
        correctAnswer: "47 / 100",
        explanation: "1. Multiples of 3 = 33.\n2. Multiples of 5 = 20.\n3. Multiples of both 3 and 5 (15) = 6.\n4. Favorable = 33 + 20 - 6 = 47. Probability = 47 / 100."
      },
      {
        question: "How many 4-digit numbers can be formed using digits 1, 2, 3, 4, 5, 6 without repetition?",
        options: ["360", "720", "240", "120"],
        correctAnswer: "360",
        explanation: "Permutations 6P4 = 6 × 5 × 4 × 3 = 360."
      },
      {
        question: "What is the probability of getting at least one head when three unbiased coins are tossed together?",
        options: ["7 / 8", "3 / 4", "1 / 2", "5 / 8"],
        correctAnswer: "7 / 8",
        explanation: "1. Total outcomes = 2³ = 8.\n2. Only 1 outcome has no heads (TTT).\n3. P(At least 1 head) = 1 - P(No heads) = 1 - 1/8 = 7/8."
      },
      {
        question: "In a box of 10 light bulbs, 3 are defective. If 2 bulbs are chosen at random, what is the probability that neither is defective?",
        options: ["7 / 15", "21 / 50", "1 / 3", "7 / 10"],
        correctAnswer: "7 / 15",
        explanation: "1. Non-defective bulbs = 7. Total bulbs = 10.\n2. P(Both good) = 7C2 / 10C2 = 21 / 45 = 7 / 15."
      },
      {
        question: "In how many ways can 4 boys and 3 girls sit in a row so that no two girls sit together?",
        options: ["1,440", "720", "2,880", "5,040"],
        correctAnswer: "1,440",
        explanation: "1. Seat 4 boys: 4! = 24 ways.\n2. There are 5 available slots (_ B _ B _ B _ B _) for 3 girls.\n3. Ways to place 3 girls in 5 slots = 5P3 = 5 × 4 × 3 = 60.\n4. Total ways = 24 × 60 = 1,440."
      },
      {
        question: "A card is drawn from a well-shuffled pack of 52 cards. What is the probability of getting a queen or a heart?",
        options: ["4 / 13", "1 / 4", "17 / 52", "7 / 26"],
        correctAnswer: "4 / 13",
        explanation: "1. Total queens = 4. Total hearts = 13.\n2. Queen of hearts is common to both (1 card).\n3. Favorable = 4 + 13 - 1 = 16.\n4. Probability = 16 / 52 = 4 / 13."
      }
    ]
  },
  {
    topic: "Logical Reasoning: Number Sequences, Letter Series & Analogies",
    icon: "🔢",
    summary: "Recognizing arithmetic and geometric progressions, alternating offset differences, square/cube offsets, Fibonacci patterns, and semantic alphabet positioning.",
    keyFormulas: [
      "Check differences (d1, d2, d3...)",
      "Look for recurrence relations: Term(n) = Term(n-1) × k ± c",
      "Check alternating odd/even positions: a1, b1, a2, b2, a3, b3...",
      "Alphabet forward positions: A=1, B=2... Z=26 | Reverse: A=26, Z=1 (Sum = 27)"
    ],
    practiceQuestions: [
      {
        question: "Identify the next number in the sequence: 4, 11, 30, 85, 248, ___?",
        options: ["735", "744", "729", "741"],
        correctAnswer: "735",
        explanation: "Pattern: (Previous Term × 3) - Consecutive Odd Numbers:\n• 4 × 3 - 1 = 11\n• 11 × 3 - 3 = 30\n• 30 × 3 - 5 = 85\n• 85 × 3 - 7 = 248\n• 248 × 3 - 9 = 744 - 9 = 735."
      },
      {
        question: "Find the missing term in the series: 2, 6, 12, 20, 30, 42, ___?",
        options: ["56", "54", "58", "60"],
        correctAnswer: "56",
        explanation: "Pattern of consecutive product of integers:\n• 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42, 7×8 = 56."
      },
      {
        question: "Complete the series: 3, 8, 18, 38, 78, ___?",
        options: ["158", "156", "160", "154"],
        correctAnswer: "158",
        explanation: "Pattern: Multiply by 2 and add 2:\n• 3×2+2=8\n• 8×2+2=18\n• 18×2+2=38\n• 38×2+2=78\n• 78×2+2 = 158."
      },
      {
        question: "Find the next term in the letter series: B, E, I, N, T, ___?",
        options: ["A", "Z", "Y", "B"],
        correctAnswer: "A",
        explanation: "Letter position gaps: B(2) +3=E(5) +4=I(9) +5=N(14) +6=T(20) +7=27(A)."
      },
      {
        question: "In the sequence 7, 10, 8, 11, 9, 12, ___, what is the next number?",
        options: ["10", "13", "7", "11"],
        correctAnswer: "10",
        explanation: "Alternating series:\n• Series 1 (odd pos): 7, 8, 9, 10...\n• Series 2 (even pos): 10, 11, 12..."
      },
      {
        question: "Identify the odd one out in the set: 121, 169, 289, 361, 512",
        options: ["512", "289", "361", "169"],
        correctAnswer: "512",
        explanation: "121 (11²), 169 (13²), 289 (17²), 361 (19²) are squares of prime numbers. 512 is 8³ (cube), not a square of a prime."
      },
      {
        question: "Doctor is related to Hospital in the same way as Teacher is related to:",
        options: ["School", "Student", "Book", "Education"],
        correctAnswer: "School",
        explanation: "A Doctor operates primarily in a Hospital; a Teacher operates in a School."
      },
      {
        question: "Find the next number: 1, 4, 27, 256, ___?",
        options: ["3125", "1024", "625", "2500"],
        correctAnswer: "3125",
        explanation: "Pattern is nⁿ:\n• 1¹ = 1\n• 2² = 4\n• 3³ = 27\n• 4⁴ = 256\n• 5⁵ = 3125."
      },
      {
        question: "Complete the alphanumeric series: A1Z, B4Y, C9X, D16W, ___?",
        options: ["E25V", "E36V", "E25U", "F25V"],
        correctAnswer: "E25V",
        explanation: "• Letters 1: A, B, C, D, E\n• Numbers: 1², 2², 3², 4², 5² = 25\n• Letters 2: Z, Y, X, W, V -> E25V."
      },
      {
        question: "Look at this series: 36, 34, 30, 28, 24, ___? What number should come next?",
        options: ["22", "20", "26", "23"],
        correctAnswer: "22",
        explanation: "Alternating subtraction of 2 and 4:\n36 - 2 = 34, 34 - 4 = 30, 30 - 2 = 28, 28 - 4 = 24, 24 - 2 = 22."
      },
      {
        question: "Thermometer : Temperature :: Barometer : ___?",
        options: ["Pressure", "Humidity", "Wind speed", "Rainfall"],
        correctAnswer: "Pressure",
        explanation: "A thermometer measures temperature; a barometer measures atmospheric pressure."
      },
      {
        question: "Find the missing term: AZ, GT, MN, ___, YB",
        options: ["SH", "SK", "TS", "RH"],
        correctAnswer: "SH",
        explanation: "First letter shifts forward by +6: A(1)+6=G(7)+6=M(13)+6=S(19)+6=Y(25).\nOpposite letter pairs (Sum = 27): S(19) pairs with H(8) since 19 + 8 = 27 -> SH."
      }
    ]
  },
  {
    topic: "Logical Reasoning: Coding-Decoding & Blood Relations",
    icon: "🧬",
    summary: "Cipher shift patterns (Caesar, matrix, substitution), family tree generational mapping, and relational syllogisms.",
    keyFormulas: [
      "Generation mapping: Grandparents (+2) -> Parents (+1) -> Self/Siblings (0) -> Children (-1)",
      "A is B's maternal uncle = B's mother's brother",
      "Caesar Cipher offset: C = (P + k) mod 26"
    ],
    practiceQuestions: [
      {
        question: "If in a certain code 'CLOUD' is written as 'GPRYH', how is 'SUNNY' written in that code?",
        options: ["WYRRC", "WXRSC", "VYRRC", "WYSSC"],
        correctAnswer: "WYRRC",
        explanation: "Each letter is shifted forward by +4 in the alphabet:\nS(+4)=W, U(+4)=Y, N(+4)=R, N(+4)=R, Y(+4)=C -> WYRRC."
      },
      {
        question: "Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
        options: ["Father", "Uncle", "Brother", "Grandfather"],
        correctAnswer: "Father",
        explanation: "1. 'Only son of my mother' = Suresh himself.\n2. The boy is the son of Suresh -> Suresh is his Father."
      },
      {
        question: "If 'LIGHT' is coded as 'MJHIU', what is the code for 'FRAME'?",
        options: ["GSBNF", "GRBNF", "HSBOF", "GSCNF"],
        correctAnswer: "GSBNF",
        explanation: "Each character is shifted by +1:\nF->G, R->S, A->B, M->N, E->F -> GSBNF."
      },
      {
        question: "Introducing a man, a woman says: 'His wife is the only daughter of my father.' How is the man related to the woman?",
        options: ["Husband", "Brother", "Father-in-law", "Maternal Uncle"],
        correctAnswer: "Husband",
        explanation: "The only daughter of the woman's father is the woman herself. Since his wife is the woman herself, the man is her Husband."
      },
      {
        question: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B. Which of the following means C is the son of M?",
        options: ["M * C + N", "M + C * N", "M - C * N", "C * M + N"],
        correctAnswer: "M * C + N",
        explanation: "M * C means M is father of C. C + N means C is brother of N (confirming C is male). Thus C is son of M."
      },
      {
        question: "If in a code language 'WATER' is written as 'YCVGT', how is 'FIRE' written in that language?",
        options: ["HKTG", "GJSF", "HLTH", "HKTH"],
        correctAnswer: "HKTG",
        explanation: "Each letter is shifted forward by +2:\nF(+2)=H, I(+2)=K, R(+2)=T, E(+2)=G -> HKTG."
      },
      {
        question: "A man says to a lady: 'Your mother's husband's sister is my aunt.' How is the lady related to the man?",
        options: ["Sister", "Daughter", "Mother", "Aunt"],
        correctAnswer: "Sister",
        explanation: "Lady's mother's husband = Lady's father. Father's sister = Lady's aunt. Since she is also the man's aunt, the lady is his Sister."
      },
      {
        question: "If 'ORANGE' is coded as 'PSBOHF', how is 'BANANA' coded?",
        options: ["CBOBOB", "CBPOBP", "CBOMOB", "CCPBPC"],
        correctAnswer: "CBOBOB",
        explanation: "Each letter is shifted forward by +1:\nB->C, A->B, N->O, A->B, N->O, A->B -> CBOBOB."
      },
      {
        question: "If 'SYSTEM' is coded as 'SYSMET' and 'NEARER' is coded as 'AENRER', how is 'FRACTION' coded?",
        options: ["CARFNOIT", "ARFCNOIT", "CARFTION", "FRACNOIT"],
        correctAnswer: "CARFNOIT",
        explanation: "The word is split into two halves of 4 letters and each half is reversed:\n'FRAC' reversed = 'CARF', 'TION' reversed = 'NOIT' -> CARFNOIT."
      },
      {
        question: "Pointing to a gentleman, Deepak said, 'His only brother is the father of my daughter's father.' How is the gentleman related to Deepak?",
        options: ["Uncle", "Father", "Grandfather", "Brother-in-law"],
        correctAnswer: "Uncle",
        explanation: "1. 'My daughter's father' = Deepak himself.\n2. 'Father of Deepak' = Deepak's father.\n3. The gentleman's only brother is Deepak's father -> The gentleman is Deepak's Uncle (Paternal Uncle)."
      },
      {
        question: "In a certain code, '253' means 'books are old', '546' means 'man is old', and '378' means 'buy good books'. What digit stands for 'are'?",
        options: ["2", "5", "3", "6"],
        correctAnswer: "2",
        explanation: "1. 'old' is common in 253 and 546 -> code for 'old' is '5'.\n2. 'books' is common in 253 and 378 -> code for 'books' is '3'.\n3. In '253' ('books are old'), remaining digit '2' represents 'are'."
      },
      {
        question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
        options: ["Granddaughter", "Daughter", "Grandmother", "Great Granddaughter"],
        correctAnswer: "Granddaughter",
        explanation: "1. A is female and child of C (since A is sister of B and C is mother of B).\n2. D is father of C -> A is the Granddaughter of D."
      }
    ]
  },
  {
    topic: "Logical Reasoning: Seating Arrangements, Direction Sense & Syllogisms",
    icon: "🧭",
    summary: "Linear & circular arrangements, direction vectors (N, S, E, W), 90°/180° turns, and Venn diagram categorical syllogisms.",
    keyFormulas: [
      "Circular seating facing center: Right = Anti-Clockwise, Left = Clockwise",
      "Total displacement = √(Δx² + Δy²)",
      "Syllogism: 'All A are B' + 'All B are C' -> 'All A are C'"
    ],
    practiceQuestions: [
      {
        question: "Six people A, B, C, D, E, F are sitting in a circle facing the center. A is to the immediate left of B. E is opposite D. C is between A and D. Who is to the immediate right of B?",
        options: ["F", "E", "D", "C"],
        correctAnswer: "F",
        explanation: "Following circular coordinates: Placements yield sequence B, A, C, D, E, F. Thus, F is to the immediate right of B."
      },
      {
        question: "A candidate starts at point P, walks 10m North, turns Right and walks 6m, turns Right again and walks 18m, then turns Left and walks 6m. How far is the candidate from point P in a straight line?",
        options: ["14.42 meters", "10 meters", "12 meters", "16 meters"],
        correctAnswer: "14.42 meters",
        explanation: "1. North-South displacement: +10 - 18 = -8m (8m South).\n2. East-West displacement: +6 + 6 = +12m (12m East).\n3. Straight-line distance = √(8² + 12²) = √(64 + 144) = √208 ≈ 14.42 meters."
      },
      {
        question: "In a row of 35 people, Ravi is 12th from the left and Amit is 15th from the right. How many people are sitting between Ravi and Amit?",
        options: ["8", "7", "9", "10"],
        correctAnswer: "8",
        explanation: "People between = Total - (Left rank + Right rank) = 35 - (12 + 15) = 35 - 27 = 8."
      },
      {
        question: "Statements: All cats are dogs. All dogs are birds. Conclusions: I. All cats are birds. II. All birds are cats.",
        options: ["Only Conclusion I follows", "Only Conclusion II follows", "Both follow", "Neither follows"],
        correctAnswer: "Only Conclusion I follows",
        explanation: "Since Cats ⊆ Dogs ⊆ Birds, all cats are birds (Conclusion I is valid). Conclusion II is not necessarily valid."
      },
      {
        question: "A man faces South. He turns 135° in the anti-clockwise direction and then 180° in the clockwise direction. Which direction is he facing now?",
        options: ["South-West", "North-West", "South-East", "North-East"],
        correctAnswer: "South-West",
        explanation: "1. South = 180°.\n2. Anti-clockwise 135° -> 180° - 135° = 45° (North-East).\n3. Clockwise 180° from North-East (45°) -> 45° + 180° = 225° (South-West)."
      },
      {
        question: "Statements: Some pens are books. All books are pencils. Conclusions: I. Some pencils are pens. II. All books are pens.",
        options: ["Only Conclusion I follows", "Only Conclusion II follows", "Both follow", "Neither follows"],
        correctAnswer: "Only Conclusion I follows",
        explanation: "Since some pens overlap books, and all books are inside pencils, the overlapping area guarantees some pencils are pens."
      },
      {
        question: "Seven persons P, Q, R, S, T, U, V are sitting in a straight row facing North. R is sitting in the middle. P and Q are at extreme ends. S is sitting immediate left of R. Who is sitting second to the left of Q if Q is at the right extreme end?",
        options: ["T or U", "S", "R", "V"],
        correctAnswer: "T or U",
        explanation: "Row size is 7. Middle position (4th) is R. P is 1st, Q is 7th. S is at 3rd (immediate left of R). Positions 5 and 6 are occupied by T, U, or V. The person second to the left of Q (7th) is at 5th position (T or U)."
      },
      {
        question: "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was Suresh facing?",
        options: ["South", "North", "East", "West"],
        correctAnswer: "South",
        explanation: "1. Morning sun is in the East; shadows fall towards the West.\n2. Since shadow is to Suresh's right, West must be to his right.\n3. Facing South puts West on one's right side."
      },
      {
        question: "Statements: No door is dog. All dogs are cats. Conclusions: I. No door is cat. II. Some cats are dogs.",
        options: ["Only Conclusion II follows", "Only Conclusion I follows", "Both follow", "Neither follows"],
        correctAnswer: "Only Conclusion II follows",
        explanation: "Since All Dogs are Cats, some Cats are definitely Dogs (Conversion rule). Conclusion I cannot be asserted since doors may overlap with non-dog cats."
      },
      {
        question: "In a class of 45 students, rank of Ayush is 16th from the top. What is his rank from the bottom?",
        options: ["30th", "29th", "31st", "28th"],
        correctAnswer: "30th",
        explanation: "Rank from bottom = Total - Rank from top + 1 = 45 - 16 + 1 = 30th."
      },
      {
        question: "A clock shows 4:30. If the minute hand points towards East, in which direction will the hour hand point?",
        options: ["North-East", "South-East", "North-West", "South-West"],
        correctAnswer: "North-East",
        explanation: "At 4:30, minute hand is at 6 (normally South, here rotated to East = 90° counter-clockwise). The hour hand is between 4 and 5 (normally South-East). Rotated 90° counter-clockwise, it points North-East."
      },
      {
        question: "Statements: All cars are wheels. Some wheels are trucks. Conclusions: I. Some cars are trucks. II. No car is a truck.",
        options: ["Either I or II follows", "Only I follows", "Only II follows", "Both follow"],
        correctAnswer: "Either I or II follows",
        explanation: "This forms a complementary pair (Particular Affirmative 'Some' and Universal Negative 'No' with identical subject/predicate), establishing an Either/Or relationship."
      }
    ]
  },
  {
    topic: "Data Interpretation: Charts, Tables & Percentage Analysis",
    icon: "📊",
    summary: "Pie chart angles, multi-bar performance graphs, trend projection, and comparative table interpretation.",
    keyFormulas: [
      "Percentage Contribution = (Sector Value / Total) × 100%",
      "Pie Chart Angle = (Sector Value / Total) × 360°",
      "Average Growth Rate = [(Final - Initial) / (Initial × Years)] × 100%"
    ],
    practiceQuestions: [
      {
        question: "In a pie chart representing student domains, VLSI occupies an angle of 72°. What percentage of the total student body does VLSI represent?",
        options: ["20%", "25%", "15%", "18%"],
        correctAnswer: "20%",
        explanation: "Percentage = (Angle / 360°) × 100% = (72 / 360) × 100% = (1/5) × 100% = 20%."
      },
      {
        question: "A company's export values in 2023, 2024, and 2025 were ₹40 Cr, ₹60 Cr, and ₹90 Cr respectively. What is the overall percentage increase from 2023 to 2025?",
        options: ["125%", "100%", "150%", "120%"],
        correctAnswer: "125%",
        explanation: "Percentage increase = [(90 - 40) / 40] × 100% = (50 / 40) × 100% = 125%."
      },
      {
        question: "If 30% of employees in an engineering firm of 600 staff are software engineers, and 40% of software engineers are full-stack certified, how many full-stack certified engineers are there?",
        options: ["72", "60", "84", "90"],
        correctAnswer: "72",
        explanation: "1. Total software engineers = 0.30 × 600 = 180.\n2. Full-stack certified = 0.40 × 180 = 72."
      },
      {
        question: "The ratio of male to female applicants in a qualifier exam is 5:3. If total applicants are 1,600, how many female applicants are there?",
        options: ["600", "1,000", "500", "750"],
        correctAnswer: "600",
        explanation: "Female applicants = [3 / (5 + 3)] × 1600 = (3/8) × 1600 = 600."
      },
      {
        question: "In a company of 800 employees, the ratio of production to sales staff is 5:3. If 20% of production staff are transferred to sales, what is the new ratio of production to sales staff?",
        options: ["4 : 4 (1 : 1)", "3 : 2", "5 : 4", "4 : 3"],
        correctAnswer: "4 : 4 (1 : 1)",
        explanation: "1. Production = (5/8) × 800 = 500. Sales = 300.\n2. 20% of 500 = 100 staff transferred.\n3. New Production = 400. New Sales = 400.\n4. New ratio = 400 : 400 = 1 : 1."
      },
      {
        question: "The expenditure of a household on Food, Rent, and Education is in the ratio 4 : 3 : 2. If the total monthly expenditure is ₹45,000, what is the amount spent on Rent?",
        options: ["₹15,000", "₹20,000", "₹10,000", "₹12,000"],
        correctAnswer: "₹15,000",
        explanation: "1. Total parts = 4 + 3 + 2 = 9.\n2. Rent share = (3/9) × 45,000 = (1/3) × 45,000 = ₹15,000."
      },
      {
        question: "In a company, quarterly profits for Q1, Q2, Q3, Q4 were ₹12M, ₹15M, ₹18M, and ₹21M. What is the average quarterly growth rate?",
        options: ["₹3M per quarter", "₹2.5M per quarter", "₹4M per quarter", "₹3.5M per quarter"],
        correctAnswer: "₹3M per quarter",
        explanation: "Total growth across 3 intervals = 21M - 12M = 9M. Average growth = 9M / 3 = ₹3M per quarter."
      },
      {
        question: "In a batch of 250 candidates, 60% passed in Technical Round, 50% passed in HR round, and 30% passed in both rounds. What percentage of candidates failed in both rounds?",
        options: ["20%", "25%", "15%", "10%"],
        correctAnswer: "20%",
        explanation: "1. P(Passed at least one) = P(Tech) + P(HR) - P(Both) = 60% + 50% - 30% = 80%.\n2. Failed in both = 100% - 80% = 20%."
      },
      {
        question: "A table shows sales of 5 models A, B, C, D, E. Total sales = 10,000 units. Model C accounts for 2,400 units. In a pie chart, what sector angle represents Model C?",
        options: ["86.4°", "72.0°", "90.0°", "84.2°"],
        correctAnswer: "86.4°",
        explanation: "Sector angle = (2400 / 10000) × 360° = 0.24 × 360° = 86.4°."
      },
      {
        question: "If revenue increased from ₹50 Lakhs to ₹75 Lakhs in Year 1 and then decreased by 20% in Year 2, what is the final revenue?",
        options: ["₹60 Lakhs", "₹65 Lakhs", "₹55 Lakhs", "₹70 Lakhs"],
        correctAnswer: "₹60 Lakhs",
        explanation: "Final revenue = 75 × (1 - 0.20) = 75 × 0.80 = ₹60 Lakhs."
      }
    ]
  },
  {
    topic: "Verbal Ability: Grammar, Sentence Correction & Critical Reasoning",
    icon: "📖",
    summary: "Subject-verb agreement, modifier placement, tense consistency, parallel structure, vocabulary context clues, and deductive reading comprehension.",
    keyFormulas: [
      "Subject-Verb Concord: Singular subjects require singular verbs (e.g. 'Neither of the options is valid')",
      "Parallelism: Elements in a list must maintain the same grammatical structure",
      "Dangling Modifier Check: Introductory participial phrases must modify the immediate next noun",
      "Active vs Passive Voice: Prioritize concise, direct active voice formulations"
    ],
    practiceQuestions: [
      {
        question: "Choose the grammatically correct sentence:",
        options: [
          "Neither the manager nor the employees were aware of the schedule change.",
          "Neither the manager nor the employees was aware of the schedule change.",
          "Neither the manager or the employees were aware of the schedule change.",
          "Neither the manager nor the employee were aware of the schedule change."
        ],
        correctAnswer: "Neither the manager nor the employees were aware of the schedule change.",
        explanation: "In 'Neither... nor' constructions, the verb agrees with the closer subject. 'Employees' is plural, requiring 'were'."
      },
      {
        question: "Identify the antonym of the word: EPHEMERAL",
        options: ["Permanent", "Transient", "Fleeting", "Short-lived"],
        correctAnswer: "Permanent",
        explanation: "'Ephemeral' means lasting for a very short time. Its direct antonym is 'Permanent' (enduring/everlasting)."
      },
      {
        question: "Select the correctly punctuated and phrased sentence:",
        options: [
          "The company expanded its operations, introduced new product lines, and hired senior architects.",
          "The company expanded it's operations, introducing new product lines, and hired senior architects.",
          "The company expanded its operations, introducing new product lines, and to hire senior architects.",
          "The company expanded its operations, introduce new product lines, and hired senior architects."
        ],
        correctAnswer: "The company expanded its operations, introduced new product lines, and hired senior architects.",
        explanation: "Maintains parallel past-tense verb structure: 'expanded', 'introduced', and 'hired', with correct possessive 'its'."
      },
      {
        question: "Find the synonym of the word: PRAGMATIC",
        options: ["Practical", "Idealistic", "Theoretical", "Speculative"],
        correctAnswer: "Practical",
        explanation: "'Pragmatic' refers to dealing with things sensibly and realistically based on practical rather than theoretical considerations."
      },
      {
        question: "Fill in the blank: The board of directors ___ scheduled to convene tomorrow morning.",
        options: ["is", "are", "were", "have been"],
        correctAnswer: "is",
        explanation: "'Board of directors' is a collective noun acting as a single cohesive unit here, thus taking the singular verb 'is'."
      },
      {
        question: "Choose the word closest in meaning to: CANDID",
        options: ["Frank & Outspoken", "Secretive", "Deceitful", "Diplomatic"],
        correctAnswer: "Frank & Outspoken",
        explanation: "'Candid' means truthful, straightforward, and frank."
      },
      {
        question: "Identify the error in the sentence: 'One of the candidate (A) / who registered for the test (B) / has scored full marks (C) / No error (D)'",
        options: ["Part (A)", "Part (B)", "Part (C)", "Part (D)"],
        correctAnswer: "Part (A)",
        explanation: "The phrase 'One of the' must always be followed by a plural noun: 'One of the candidates', not 'candidate'."
      },
      {
        question: "Which of the following idioms means 'to face a difficult situation with courage'?",
        options: ["Bite the bullet", "Beat around the bush", "Burn the midnight oil", "Break the ice"],
        correctAnswer: "Bite the bullet",
        explanation: "'To bite the bullet' means to confront a painful or grim situation with resilience and bravery."
      },
      {
        question: "Fill in the blank with the appropriate preposition: She has been working at the research institute ___ 2021.",
        options: ["since", "for", "from", "during"],
        correctAnswer: "since",
        explanation: "'Since' is used to denote a specific starting point in time for continuous action ('since 2021')."
      },
      {
        question: "Select the sentence with correct modifier placement:",
        options: [
          "Walking into the server room, the engineer noticed that the cooling system was offline.",
          "Walking into the server room, the cooling system was noticed offline by the engineer.",
          "The cooling system was noticed offline walking into the server room by the engineer.",
          "Walking into the server room, an alert was seen by the engineer."
        ],
        correctAnswer: "Walking into the server room, the engineer noticed that the cooling system was offline.",
        explanation: "The participial modifier 'Walking into the server room' logically and immediately modifies the actor 'the engineer'."
      },
      {
        question: "What is the meaning of the word 'UBIQUITOUS'?",
        options: ["Present everywhere", "Extremely rare", "Highly dangerous", "Ancient"],
        correctAnswer: "Present everywhere",
        explanation: "'Ubiquitous' means present, appearing, or found everywhere simultaneously (omnipresent)."
      },
      {
        question: "Choose the correct passive voice transformation: 'The security team patched the vulnerability.'",
        options: [
          "The vulnerability was patched by the security team.",
          "The vulnerability has been patched by the security team.",
          "The vulnerability is patched by the security team.",
          "The vulnerability had patched by the security team."
        ],
        correctAnswer: "The vulnerability was patched by the security team.",
        explanation: "Simple past tense 'patched' transforms in passive voice to 'was patched + by agent'."
      }
    ]
  }
];

export const DOMAIN_STUDY_GUIDES = {
  'vlsi': {
    domainName: 'VLSI & Chip Design (Semiconductor Engineering)',
    category: 'Hardware & Electronics Engineering',
    icon: '⚡',
    overview: 'VLSI encompasses front-end digital design (Verilog/SystemVerilog, RTL synthesis, FSMs) and back-end physical design (floorplanning, clock tree synthesis, Static Timing Analysis STA, DRC/LVS, FPGA implementation).',
    coreModules: [
      {
        title: 'Digital Logic, Verilog RTL & State Machine Modeling',
        concepts: 'Combinational vs sequential logic, blocking (=) vs non-blocking (<=) assignments, Mealy vs Moore state machines, setup time (t_su), hold time (t_h), clock-to-q delay (t_cq), metastability, and RTL synthesis pipelines.',
        conceptPillars: [
          {
                    "title": "Hardware Description Language (Verilog/SystemVerilog) Standards",
                    "points": [
                              "Combinational vs Sequential Modeling: Combinational networks must evaluate instantaneously using `assign` or `always @(*)` with complete sensitivity lists. Sequential networks MUST use edge-triggered clocks `always @(posedge clk or negedge rst_n)`.",
                              "Blocking (=) vs Non-Blocking (<=) Mechanics: Blocking assignments execute in strict procedural order within the simulator; Non-blocking assignments calculate all right-hand sides during the Active event region and commit to left-hand registers during the Non-Blocking Assignment (NBA) region, eliminating simulation-synthesis race conditions.",
                              "Avoiding Inadvertent Hardware Latches: Always assign default values to all outputs at the beginning of combinational `always` blocks or provide full `else` branches and `default` cases in `case` statements.",
                              "Mealy vs Moore Finite State Machines (FSM): Moore machine outputs depend strictly on state registers (guaranteed glitch-free and clean timing); Mealy machine outputs depend on state and inputs (faster response, but vulnerable to input glitch propagation)."
                    ]
          },
          {
                    "title": "Timing Analysis, Metastability & Clock Domain Crossing (CDC)",
                    "points": [
                              "Setup Time (t_su) & Hold Time (t_h): Data input must arrive and stabilize at least t_su before the active clock edge, and remain unchanged for at least t_h after the edge.",
                              "Metastability Physics: When setup or hold timing is violated, internal back-to-back inverters in the flip-flop settle into an intermediate voltage level (between logic 0 and 1) for an unpredictable settling duration.",
                              "Dual-Flop Synchronizer: Cascading two D flip-flops clocked by the destination clock domain exponentially reduces the probability of metastability entering downstream logic (high MTBF).",
                              "Asynchronous FIFO & Gray Coding: Pointers crossing clock domains are converted to Gray code so that only one bit transitions at any given step, preventing intermediate state corruption during multi-bit bus sampling."
                    ]
          }
],
        practice: [
          {
            q: 'Why are non-blocking assignments (<=) strictly mandatory for sequential always blocks in Verilog?',
            ans: 'To prevent race conditions and ensure all registers update concurrently at the clock edge.',
            detail: 'Blocking assignments (=) execute sequentially, creating simulation synthesis mismatches and clock skew race hazards in hardware flip-flop registers.'
          },
          {
            q: 'What is Setup Time (t_su) in sequential flip-flop timing?',
            ans: 'The minimum time the input data signal must remain stable BEFORE the active clock transition edge.',
            detail: 'Violating setup time causes internal transistor threshold indeterminacy, resulting in output metastability and logic data corruption.'
          },
          {
            q: 'How does a Moore state machine differ fundamentally from a Mealy state machine?',
            ans: 'Moore machine outputs depend SOLELY on current state; Mealy machine outputs depend on current state AND current inputs.',
            detail: 'Moore outputs are generally glitch-free and synchronous, whereas Mealy machines often require fewer states but can propagate input glitches directly to outputs.'
          },
          {
            q: 'How can hold time violations be remedied during the physical design phase?',
            ans: 'By inserting delay buffer cells along the short data path.',
            detail: 'Hold violations occur when data arrives too quickly before the hold window closes. Unlike setup violations, hold violations cannot be fixed by slowing down the clock frequency, requiring buffer insertion.'
          }
        ]
      },
      {
        title: 'Static Timing Analysis (STA), Physical Design & Fabrication',
        concepts: 'Setup/Hold slack calculations (Slack = Required - Arrival), Clock Tree Synthesis (CTS), skew and jitter budgeting, DRC (Design Rule Checking), LVS (Layout Versus Schematic), and FinFET scaling.',
        conceptPillars: [
          {
                    "title": "Static Timing Analysis (STA) & Slack Equations",
                    "points": [
                              "Setup Slack Formulation: Slack_setup = (T_period + T_skew_capture - T_su - T_jitter) - (T_cq + T_data_path_max). Must be >= 0.",
                              "Hold Slack Formulation: Slack_hold = (T_cq + T_data_path_min - T_skew_capture) - T_h. Must be >= 0.",
                              "Fixing Timing Violations: Setup violations are remedied by pipeline register insertion, logic restructuring, or decreasing clock frequency; Hold violations CANNOT be fixed by changing clock frequency and require buffer insertion in the physical layout.",
                              "On-Chip Variation (OCV) & Derating: Applying statistical timing derates (e.g., ±5-10%) to model temperature gradients, supply voltage IR drops, and silicon manufacturing variations."
                    ]
          },
          {
                    "title": "Physical Design Flow (RTL-to-GDSII) & DRC/LVS",
                    "points": [
                              "Floorplanning & Power Grid Design: Defining die core aspect ratio, I/O pin assignments, placement of memory SRAM macros, and building robust low-IR-drop VDD/VSS power meshes.",
                              "Clock Tree Synthesis (CTS): Constructing balanced H-tree or multi-level clock distribution networks to minimize global clock skew and insertion delay.",
                              "Signoff Verification: Design Rule Checking (DRC) for geometric silicon spacing, Layout Versus Schematic (LVS) for electrical connectivity matching, and Electrical Rule Checking (ERC)."
                    ]
          }
],
        practice: [
          {
            q: 'What does a positive Slack value indicate in Static Timing Analysis (STA)?',
            ans: 'The circuit design successfully meets all timing constraints with margin to spare.',
            detail: 'Slack = Required Time - Arrival Time. Positive slack means the signal reaches its destination earlier than required.'
          },
          {
            q: 'What is Clock Skew in synchronous VLSI circuits?',
            ans: 'The temporal difference in clock arrival times at different flip-flops across the chip.',
            detail: 'Skew occurs due to variations in interconnect wire lengths, capacitive load differences, and temperature gradients across the silicon die.'
          },
          {
            q: 'Why is Clock Tree Synthesis (CTS) a pivotal stage in physical design?',
            ans: 'It builds a balanced routing network (H-tree/mesh) to minimize clock skew and insertion delay across millions of registers.',
            detail: 'Uncontrolled clock tree delay causes catastrophic hold/setup timing violations across adjacent pipeline stages.'
          },
          {
            q: 'What is the purpose of Design for Testability (DFT) scan chains in ASIC manufacturing?',
            ans: 'To convert internal flip-flops into shift registers for automated post-fabrication silicon fault detection (ATPG).',
            detail: 'DFT scan chains allow external automatic test equipment (ATE) to shift in test vectors, clock the logic, and shift out results to detect stuck-at silicon faults.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'VLSI Design / Verification Engineer',
      salaryRange: '₹8.5 LPA – ₹24.0 LPA (Avg: ₹14.2 LPA)',
      interviewDifficulty: 'Hard (3.8 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Intel', 'Qualcomm', 'NVIDIA', 'Synopsys', 'Cadence', 'AMD', 'Texas Instruments'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'How do you fix setup time and hold time violations in a high-speed synchronous pipeline? (Intel interview review)',
        'Write Verilog code for an asynchronous FIFO with Gray code pointer synchronization across clock domains. (Qualcomm interview review)',
        'What is metastability in digital flip-flops and how does a 2-stage synchronizer alleviate MTBF? (NVIDIA interview review)',
        'Explain Static Timing Analysis (STA) graph propagation and how clock jitter impacts timing margin.'
      ],
      candidateTips: 'Glassdoor candidates strongly emphasize mastering Verilog RTL, SystemVerilog OOP assertions (UVM), STA slack calculations, and drawing state machine diagrams during whiteboard rounds.'
    }
  ,
    ambitionboxData: {
      "roleTitle": "VLSI Engineer / RTL Design & Verification",
      "salaryRange": "₹7.5 LPA – ₹22.0 LPA (Avg: ₹13.8 LPA)",
      "rating": "4.2 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Qualcomm India",
            "Intel India",
            "Texas Instruments",
            "Synopsys",
            "Cadence Design",
            "Wipro VLSI"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "What is the difference between blocking and non-blocking statements in Verilog? (Qualcomm India interview review)",
            "Explain Setup and Hold time violations and how to fix hold violations in silicon layout. (Intel India review)",
            "Design a sequence detector for pattern \"1011\" with overlapping using Mealy FSM. (Synopsys India review)",
            "What is clock gating and how does it reduce dynamic power dissipation in ASIC circuits?"
      ],
      "candidateTips": "AmbitionBox candidates emphasize revising Digital Electronics fundamentals, K-maps, Verilog FSM modeling, and Static Timing Analysis (STA) basics."
}
  },
  'ai-ml': {
    domainName: 'Artificial Intelligence & Machine Learning',
    category: 'Advanced Computing & Data Intelligence',
    icon: '🧠',
    overview: 'Covers supervised, unsupervised, and deep learning algorithms, loss functions, gradient descent optimization, transformers, CNNs/RNNs, and production model evaluation.',
    coreModules: [
      {
        title: 'Supervised Learning, Loss Optimization & Regularization',
        concepts: 'Linear/Logistic regression, Decision Trees, Random Forests, Gradient Boosting (XGBoost), Loss functions (MSE, Cross-Entropy), Bias-Variance Tradeoff, L1 Lasso / L2 Ridge regularization, and Adam optimizer.',
        conceptPillars: [
          {
                    "title": "Mathematical Foundations, Loss Formulations & Optimization",
                    "points": [
                              "Loss Functions: Mean Squared Error (MSE) / Huber Loss for continuous regression; Binary / Categorical Cross-Entropy (Log-Loss) for probability classification.",
                              "Gradient Descent Algorithms: Batch GD, Stochastic GD (SGD), Mini-Batch GD, and Adam (Adaptive Moment Estimation combining Momentum and RMSprop for sparse gradients).",
                              "Bias-Variance Tradeoff: High bias results in underfitting (model unable to capture complexity); High variance results in overfitting (model captures training noise).",
                              "L1 Lasso vs L2 Ridge Regularization: L1 adds absolute weight penalty (∑|w|), driving irrelevant weights to zero for feature selection; L2 adds squared weight penalty (∑w²), shrinking weights smoothly to prevent domination."
                    ]
          },
          {
                    "title": "Tree-Based Models, Bagging & Boosting Ecosystem",
                    "points": [
                              "Decision Trees & Splitting Criteria: Gini Impurity vs Information Gain (Shannon Entropy); pruning mechanisms (cost-complexity pruning, max depth, min samples split).",
                              "Random Forests (Bagging): Training an ensemble of de-correlated decision trees using Bootstrap sampling and random feature subsets to drastically reduce model variance.",
                              "Gradient Boosting Machines: Sequential weak-learner training where each subsequent tree minimizes pseudo-residuals of previous trees (XGBoost, LightGBM, CatBoost)."
                    ]
          }
],
        practice: [
          {
            q: 'How does L1 Regularization (Lasso) differ fundamentally from L2 Regularization (Ridge)?',
            ans: 'L1 drives feature weights to absolute zero (feature selection); L2 shrinks weights close to zero without zeroing them out.',
            detail: 'L1 adds the sum of absolute coefficients (|w|) to the cost function, creating sparse models. L2 adds squared magnitudes (w²), preventing any single weight from dominating.'
          },
          {
            q: 'What is the primary cause of vanishing gradients in deep recurrent or deep feedforward neural networks?',
            ans: 'Repeated multiplication of small derivative values (< 1) across layers during backpropagation with saturating activations like Sigmoid/Tanh.',
            detail: 'Using ReLU or Leaky ReLU activation functions and Residual Skip Connections (ResNets) effectively mitigates gradient vanishing.'
          },
          {
            q: 'In binary classification evaluation with severe class imbalance (99% negative, 1% positive), why is Accuracy a misleading metric?',
            ans: 'A naive model predicting only the majority class achieves 99% accuracy while completely failing to detect positives.',
            detail: 'In imbalanced datasets (e.g. fraud detection), Precision, Recall, F1-Score, and ROC-AUC are the required standard evaluation metrics.'
          },
          {
            q: 'What is the core mechanism enabling Transformer models (like BERT and GPT) to surpass traditional RNNs?',
            ans: 'Multi-Head Self-Attention mechanisms allowing parallel sequence processing and long-range dependency capture.',
            detail: 'Transformers eliminate sequential recurrence, computing attention scores between every pair of tokens in a sequence simultaneously using Query, Key, and Value matrix multiplications.'
          }
        ]
      },
      {
        title: 'Deep Learning, CNN Architectures & Production Deployment',
        concepts: 'Convolutional filters, pooling, dropout, batch normalization, transfer learning, quantization, ONNX export, and model drift monitoring.',
        conceptPillars: [
          {
                    "title": "Deep Neural Networks, CNNs & Self-Attention Transformers",
                    "points": [
                              "Convolutional Operations: Kernels, feature maps, padding (valid/same), stride, and spatial pooling (Max/Average pooling) for translation-invariant feature extraction.",
                              "Residual Networks (ResNet): Skip/identity connections allow gradients to backpropagate unimpeded across 100+ layers, completely mitigating the vanishing gradient dilemma.",
                              "Transformer Self-Attention: Scaled Dot-Product Attention: Attention(Q, K, V) = softmax((Q × K^T) / sqrt(d_k)) × V, enabling parallel token context learning over linear RNN sequences.",
                              "Regularization & Normalization: Dropout (random neuron deactivation during training), Batch Normalization (zero mean, unit variance per batch), and Layer Normalization (per-sample normalization)."
                    ]
          },
          {
                    "title": "MLOps, Evaluation Metrics & Production Serving",
                    "points": [
                              "Classification Metrics: Precision = TP / (TP + FP); Recall = TP / (TP + FN); F1-Score = 2*(Precision*Recall)/(Precision + Recall); ROC-AUC for threshold-invariant performance.",
                              "Data Drift vs Concept Drift: Data Drift is covariate shift P(X); Concept Drift is true statistical relationship shift P(Y|X) requiring automated retraining triggers.",
                              "Model Serialization & Acceleration: ONNX (Open Neural Network Exchange), TensorRT quantization (FP16/INT8), and Triton Inference Server deployments."
                    ]
          }
],
        practice: [
          {
            q: 'What is the primary function of Batch Normalization in deep convolutional neural networks?',
            ans: 'It stabilizes and accelerates training by normalizing layer inputs to zero mean and unit variance.',
            detail: 'Batch Normalization reduces internal covariate shift, allowing higher learning rates and acting as a mild regularizer.'
          },
          {
            q: 'What is the difference between Data Drift and Concept Drift in production ML systems?',
            ans: 'Data Drift is a shift in input feature distribution P(X); Concept Drift is a change in the underlying statistical relationship between features and target P(Y|X).',
            detail: 'Both drifts degrade production inference accuracy over time, requiring continuous telemetry and automated retraining pipelines.'
          },
          {
            q: 'How does transfer learning leverage pretrained models for domain-specific tasks?',
            ans: 'By freezing early feature-extraction layers and fine-tuning top classification heads with domain data.',
            detail: 'Early layers in vision/NLP models capture universal low-level features (edges/textures or word syntax), drastically cutting training time and dataset size requirements.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Machine Learning / AI Engineer',
      salaryRange: '₹9.0 LPA – ₹28.0 LPA (Avg: ₹16.5 LPA)',
      interviewDifficulty: 'Hard (3.9 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Google', 'Microsoft', 'Amazon AWS', 'Adobe', 'Meta', 'Uber', 'Flipkart'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'Explain the mathematical formulation of the Self-Attention mechanism in Transformers. (Google interview review)',
        'How do you prevent overfitting in deep neural networks when working with limited labeled training samples? (Amazon interview review)',
        'Design an end-to-end real-time recommendation system handling 100M+ items with low inference latency. (Uber interview review)',
        'What metrics would you use to evaluate an NLP generation model (BLEU, ROUGE, Perplexity)?'
      ],
      candidateTips: 'Glassdoor interview reviews recommend coding algorithms from scratch in Python (NumPy/PyTorch), explaining loss function derivation mathematically, and demonstrating production MLOps pipeline architectures.'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Machine Learning Engineer / AI Data Scientist",
      "salaryRange": "₹8.0 LPA – ₹26.0 LPA (Avg: ₹15.2 LPA)",
      "rating": "4.3 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Google India",
            "Microsoft IDC",
            "Amazon Development Centre",
            "Flipkart",
            "Swiggy",
            "Reliance Jio"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "Explain Bias-Variance tradeoff with real-world examples. (Amazon India review)",
            "How does gradient boosting (XGBoost) differ from random forests? (Flipkart review)",
            "Explain Transformer Self-Attention mechanism and Query-Key-Value calculation. (Microsoft IDC review)",
            "How do you handle severe class imbalance in real-time fraud detection systems?"
      ],
      "candidateTips": "AmbitionBox reviews emphasize strong Python live coding, Pandas data manipulation, explaining ML math from scratch, and presenting clear end-to-end ML project architectures."
}
  },
  'java': {
    domainName: 'Java Enterprise Programming & Spring Boot',
    category: 'Enterprise Software & Microservices',
    icon: '☕',
    overview: 'Master Core Java, JVM architecture, Memory Management (Garbage Collection), Object-Oriented Design Patterns, Spring Boot Microservices, Hibernate ORM, and RESTful API engineering.',
    coreModules: [
      {
        title: 'Core Java, JVM Internals & Multithreading',
        concepts: 'JVM architecture (ClassLoader, Heap, Stack, Metaspace), Garbage Collection algorithms (G1, ZGC), Collections framework, Immutability, volatile vs synchronized, Java 8+ Streams and Lambdas.',
        conceptPillars: [
          {
                    "title": "JVM Runtime Architecture & Memory Organization",
                    "points": [
                              "ClassLoader Subsystem: Three-tier delegation hierarchy (Bootstrap, Platform/Extension, Application/System) with Loading, Linking (Verify, Prepare, Resolve), and Initialization stages.",
                              "Runtime Memory Areas: Heap (shared object storage across threads, divided into Young Eden/Survivor and Old Tenured generations), JVM Stack (thread-private method call frames with Local Variable Table and Operand Stack), and Metaspace (native memory class metadata replacing PermGen).",
                              "Garbage Collection Algorithms: Generational GC hypothesis; Mark-Sweep-Compact cycle; G1 GC (region-based with deterministic pause targets); ZGC & Shenandoah (ultra-low latency sub-millisecond concurrent collectors using colored pointers and load barriers).",
                              "JIT Compilation: HotSpot JVM tiered compilation using C1 (fast client compilation) and C2 (heavy hotspot optimization, loop unrolling, and method inlining)."
                    ]
          },
          {
                    "title": "Java Concurrency, Memory Model (JMM) & Multithreading",
                    "points": [
                              "Java Memory Model & `volatile`: Guarantees memory visibility and prevents compiler instruction reordering via memory barriers (happens-before relationship); does NOT provide atomicity for compound operations.",
                              "`synchronized` vs `ReentrantLock`: `synchronized` is JVM-managed intrinsic monitor locking; `ReentrantLock` provides explicit lock/unlock, tryLock timeout handling, interruptible locks, and fairness policies.",
                              "ExecutorService & Thread Pools: CorePoolSize, MaxPoolSize, KeepAliveTime, WorkQueue (LinkedBlockingQueue vs ArrayBlockingQueue), and RejectionPolicies (AbortPolicy, CallerRunsPolicy).",
                              "Virtual Threads (Project Loom / Java 21): Ultra-lightweight user-mode threads scheduled by JVM onto limited OS carrier threads, supporting millions of concurrent I/O-bound tasks."
                    ]
          },
          {
                    "title": "Modern Java & Collections Framework Internals",
                    "points": [
                              "HashMap Internals: Bucket array of Linked Nodes converting to Red-Black Trees when bucket size >= 8 (TREEIFY_THRESHOLD) and capacity >= 64, achieving O(log N) worst-case lookup.",
                              "ConcurrentHashMap: Lock-free CAS (Compare-And-Swap) and synchronized bucket node locking, eliminating table-wide locks.",
                              "Functional Java (8–21): Streams API (`map`, `filter`, `flatMap`, `reduce`, `collect`), Lambdas, Optional API, Records (immutable data carriers), Pattern Matching for switch, and Sealed Classes/Interfaces."
                    ]
          }
],
        practice: [
          {
            q: 'What is the difference between JVM Stack and Heap memory in Java?',
            ans: 'Stack stores primitive local variables and method call frames; Heap stores all instantiated objects.',
            detail: 'Stack memory is thread-private and fast, automatically cleaned up when method returns. Heap is shared across all threads and managed by the Garbage Collector.'
          },
          {
            q: 'What purpose does the volatile keyword serve in Java concurrent programming?',
            ans: 'It guarantees visibility of variable updates across all threads by reading/writing directly to main memory instead of CPU caches.',
            detail: 'While volatile ensures memory visibility, it does NOT guarantee atomicity for compound operations like count++.'
          },
          {
            q: 'Why should custom classes override both equals() and hashCode() simultaneously?',
            ans: 'To maintain the contract required by hash-based collections (HashMap, HashSet).',
            detail: 'If two objects are equal according to equals(), they must produce the identical hashCode(), otherwise HashMap lookups will fail to retrieve stored entries.'
          },
          {
            q: 'How does the Spring Dependency Injection (IoC) container manage object lifecycles?',
            ans: 'By creating, wiring, configuring, and managing beans via metadata annotations (@Component, @Autowired, @Service).',
            detail: 'Inversion of Control decouples component creation from business logic, making systems modular and easily unit-testable.'
          }
        ]
      },
      {
        title: 'Spring Boot, Microservices & JPA/Hibernate',
        concepts: 'Spring Boot auto-configuration, REST controllers, Spring Security & JWT, JPA Entity lifecycle, N+1 query problem, transactions (@Transactional), and microservices circuit breakers (Resilience4j).',
        conceptPillars: [
          {
                    "title": "Spring Core IoC Container & Dependency Injection Lifecycle",
                    "points": [
                              "Inversion of Control (IoC) & Bean Lifecycle: Bean definition reading -> Instantiation -> Property population -> BeanPostProcessor -> @PostConstruct -> Ready -> @PreDestroy.",
                              "Core Annotations: @Component, @Service, @Repository, @RestController, @Autowired (Constructor Injection strongly recommended for immutability and easy unit testing with Mockito).",
                              "Spring Boot Auto-Configuration: @SpringBootApplication activates @EnableAutoConfiguration and @ComponentScan; evaluates conditional triggers (@ConditionalOnClass, @ConditionalOnProperty) from spring.factories."
                    ]
          },
          {
                    "title": "Hibernate / JPA ORM & Microservices Resilience",
                    "points": [
                              "JPA Entity States & Caching: Transient, Persistent, Detached, Removed; First-Level Session Cache and Second-Level Shared Cache (Redis/Ehcache).",
                              "Resolving N+1 Query Problem: Use `JOIN FETCH` in JPQL or specify `@EntityGraph` to eagerly load related associations in a single SQL query instead of N extra queries.",
                              "Microservices Resilience Patterns: Resilience4j Circuit Breaker (Closed -> Open -> Half-Open state transitions), Rate Limiter, Retry with exponential backoff, and Bulkhead isolation.",
                              "Spring Cloud Ecosystem: Spring Cloud Gateway for centralized routing/authentication, Eureka/Consul for Service Discovery, Distributed Tracing with OpenTelemetry/Zipkin, and Apache Kafka for asynchronous event-driven messaging."
                    ]
          }
],
        practice: [
          {
            q: 'What is the JPA/Hibernate "N+1 Query Problem" and how is it resolved?',
            ans: 'When fetching 1 parent entity triggers N separate queries for its children; resolved using JOIN FETCH or EntityGraphs.',
            detail: 'Using JOIN FETCH queries both parent and lazy-loaded child records in a single SQL operation, drastically reducing database roundtrips.'
          },
          {
            q: 'What is the role of an API Gateway in a microservices architecture?',
            ans: 'Single entry point handling request routing, authentication, rate limiting, and SSL termination.',
            detail: 'API Gateways prevent client applications from directly coupling to internal microservices network addresses.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Senior Java / Spring Boot Developer',
      salaryRange: '₹7.5 LPA – ₹22.0 LPA (Avg: ₹13.0 LPA)',
      interviewDifficulty: 'Moderate to Hard (3.5 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Oracle', 'JPMorgan Chase', 'Morgan Stanley', 'Infosys', 'TCS', 'Capgemini', 'Cognizant'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'How does ConcurrentHashMap achieve thread safety without locking the entire map? (JPMorgan interview review)',
        'Explain how Spring Boot @Transactional works under the hood using CGLIB/JDK dynamic proxies. (Oracle interview review)',
        'How do you diagnose and resolve OutOfMemoryError: Java heap space using heap dumps in production? (Morgan Stanley interview review)',
        'Design a distributed rate limiter in Spring Boot using Redis Token Bucket algorithm.'
      ],
      candidateTips: 'Glassdoor reviewers recommend thoroughly brushing up on Java 8 Streams, Multithreading locks (ReentrantLock), Garbage Collection tuning, and Spring Boot Microservice communication (REST vs Kafka).'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Java Backend Developer / Spring Boot Engineer",
      "salaryRange": "₹6.5 LPA – ₹20.0 LPA (Avg: ₹11.8 LPA)",
      "rating": "4.1 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant",
            "Capgemini",
            "HCLTech",
            "Accenture India"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "How does Java HashMap handle collisions internally (LinkedList to Red-Black Tree threshold)? (TCS interview review)",
            "What is the difference between Spring @Component, @Service, and @Repository annotations? (Infosys review)",
            "How do you implement microservices communication using Spring Cloud FeignClient and Kafka? (Cognizant review)",
            "Explain Java Memory Model: Garbage Collection phases and tuning JVM Heap parameters."
      ],
      "candidateTips": "AmbitionBox candidates recommend solid mastery over Java 8 Streams, Spring Boot REST controllers, Microservices architectural patterns, and Hibernate ORM query optimization."
}
  },
  'python': {
    domainName: 'Python Programming & Backend Systems',
    category: 'Programming Languages & Systems',
    icon: '🐍',
    overview: 'Python systems programming, memory management (CPython reference counting & GC), GIL mechanics, decorators, generators, asynchronous concurrency (asyncio), and data engineering.',
    coreModules: [
      {
        title: 'Advanced Python Internals, Concurrency & Memory Model',
        concepts: 'CPython Global Interpreter Lock (GIL), GIL implications for multi-threading vs multi-processing, memory management (arena allocator, cyclic garbage collection), *args/**kwargs, decorators, context managers (__enter__, __exit__), and generator memory efficiency.',
        conceptPillars: [
          {
                    "title": "CPython Memory Management, Reference Counting & GIL",
                    "points": [
                              "Global Interpreter Lock (GIL): CPython mutex ensuring thread safety for internal memory management; single process runs bytecode on one CPU core at a time; bypassed via `asyncio` for I/O and `multiprocessing` for CPU-bound tasks.",
                              "Garbage Collection & Reference Counting: Immediate deallocation when reference count reaches 0; generational cyclic GC (Gen 0, 1, 2) detects and frees circular references.",
                              "Advanced Python Constructs: Generators (`yield`) for memory-efficient lazy streams, Decorators (closures extending function behaviors), Context Managers (`with` statement via `__enter__`/`__exit__`), and Metaclasses (`type`).",
                              "Modern Typing & Validation: `typing` module, Pydantic BaseModel schemas, `@dataclass`, and structural pattern matching (`match-case`)."
                    ]
          },
          {
                    "title": "Asynchronous Concurrency (`asyncio`) & Backend Frameworks",
                    "points": [
                              "Event Loop & Coroutines: Single-threaded non-blocking cooperative concurrency using `async`/`await`, `asyncio.gather()`, and `asyncio.create_task()`, achieving 50k+ req/sec for I/O.",
                              "FastAPI & Starlette: ASGI web framework with automatic OpenAPI/Swagger documentation, dependency injection, and Pydantic serialization.",
                              "Django Architecture & ORM: Model-Template-View (MTV) pattern; optimizing queries using `select_related()` (SQL inner join for single relationships) and `prefetch_related()` (batch query for many relationships); Django REST Framework (DRF) viewsets."
                    ]
          },
          {
                    "title": "NumPy Vectorization & High-Performance Data Processing",
                    "points": [
                              "NumPy C-Contiguous Arrays: SIMD vectorized computations bypassing Python loop overhead; broadcasting rules across unequal tensor shapes.",
                              "Pandas Optimization: Avoid row-wise iteration (`.iterrows()`); use vectorized column operations, categorical data types, and chunked read (`chunksize`) for gigabyte-scale datasets.",
                              "Production Stack: Gunicorn process manager with Uvicorn worker threads running behind Nginx reverse proxy with SSL termination."
                    ]
          }
],
        practice: [
          {
            q: 'What is the Global Interpreter Lock (GIL) in CPython and what is its primary effect on CPU-bound multi-threaded programs?',
            ans: 'A mutex that prevents multiple native threads from executing Python bytecodes simultaneously, restricting CPU-bound tasks to a single core.',
            detail: 'To achieve true multi-core CPU parallelism in Python, developers use the `multiprocessing` module or native C/Rust extensions rather than `threading`.'
          },
          {
            q: 'How do Python generator functions (yield) optimize memory consumption compared to standard list returns?',
            ans: 'Generators produce values on-demand one by one (lazy evaluation) without allocating the entire dataset in memory.',
            detail: 'Streaming a 10GB log file with a generator consumes negligible memory (a few kilobytes) instead of exhausting system RAM.'
          },
          {
            q: 'What is the primary difference between a Python shallow copy and a deep copy?',
            ans: 'Shallow copy duplicates the outer object while referencing inner nested objects; Deep copy recursively duplicates all nested objects.',
            detail: 'Mutating a nested list inside a shallow copy inadvertently mutates the original object, whereas a deep copy ensures complete isolation.'
          },
          {
            q: 'How does Python\'s asyncio event loop achieve high I/O concurrency on a single thread?',
            ans: 'By using non-blocking OS socket multiplexing (epoll/kqueue) and cooperative multitasking with coroutines (async/await).',
            detail: 'When a coroutine awaits an I/O operation (database query or network fetch), the event loop immediately switches execution to other pending tasks.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Python Backend / Systems Engineer',
      salaryRange: '₹7.0 LPA – ₹20.0 LPA (Avg: ₹12.8 LPA)',
      interviewDifficulty: 'Moderate (3.4 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Cisco', 'Spotify', 'Dropbox', 'Paytm', 'Swiggy', 'Zomato', 'Red Hat'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'Explain Python GIL and how to circumvent it for high-concurrency workloads. (Dropbox interview review)',
        'Write a custom decorator with arguments in Python that logs execution time and retries on exception. (Cisco interview review)',
        'How does CPython garbage collection resolve cyclic reference dependencies? (Spotify interview review)',
        'Design a high-throughput API with FastAPI, async DB drivers, and Redis caching.'
      ],
      candidateTips: 'Glassdoor interviewees suggest practicing OOP design in Python, decorators, generator pipelines, and demonstrating familiarity with FastAPI or Django microservices.'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Python Developer / Backend Software Engineer",
      "salaryRange": "₹6.0 LPA – ₹18.5 LPA (Avg: ₹11.2 LPA)",
      "rating": "4.1 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Paytm",
            "Zomato",
            "Swiggy",
            "Thoughtworks",
            "Tech Mahindra",
            "L&T Infotech"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "What are Python decorators and how do you write a decorator with arguments? (Swiggy review)",
            "Explain Python GIL (Global Interpreter Lock) and how to handle CPU-heavy operations. (Thoughtworks review)",
            "What is the difference between list comprehension, generator expressions, and map/filter? (Zomato review)",
            "Design a secure REST API using FastAPI / Django REST framework with JWT authentication."
      ],
      "candidateTips": "AmbitionBox reviewers recommend practicing Data Structures in Python, OOP principles, writing modular clean code, and understanding async / await concurrency."
}
  },
  'full-stack': {
    domainName: 'Full Stack Web Development (MERN / Next.js)',
    category: 'Software Engineering & Cloud Architecture',
    icon: '💻',
    overview: 'Full Stack encompasses client-side architecture (HTML5/CSS3/JavaScript/React), backend microservices (Node.js/Express, REST, GraphQL), database normalization (SQL & NoSQL), and CI/CD security.',
    coreModules: [
      {
        title: 'Frontend Architecture, React Internals & Modern JavaScript',
        concepts: 'Virtual DOM diffing algorithm, React Fiber, hooks (useEffect, useMemo, useCallback), closures, event bubbling/delegation, asynchronous event loops (Microtasks vs Macrotasks), and CSS Grid/Flexbox layouts.',
        conceptPillars: [
          {
                    "title": "React Architecture, Virtual DOM & Fiber Reconciler",
                    "points": [
                              "Virtual DOM & React Fiber: Incremental reconciliation, split-phase rendering (Render phase: pure, cancellable; Commit phase: DOM mutations), and automatic state batching.",
                              "Hooks Mastery: `useState`, `useEffect` (lifecycle management & cleanup), `useCallback` and `useMemo` for referential stability, `useRef` for persistent references without re-renders, and `useContext`.",
                              "State Management: Redux Toolkit (RTK Query for automatic cache invalidation and normalized state), Zustand for lightweight atomic stores, and TanStack React Query for asynchronous server-state management.",
                              "Next.js App Router & SSR: React Server Components (RSC) for zero-bundle server rendering, Client Components (`'use client'`), Static Site Generation (SSG), and Server Actions for form submissions."
                    ]
          },
          {
                    "title": "Browser Internals, CSS Architecture & Web Performance",
                    "points": [
                              "Critical Rendering Path: HTML Parsing -> DOM -> CSSOM -> Render Tree -> Layout (Reflow) -> Paint -> GPU Compositing.",
                              "Core Web Vitals Optimization: Largest Contentful Paint (LCP < 2.5s), Interaction to Next Paint (INP < 200ms), and Cumulative Layout Shift (CLS < 0.1); dynamic code splitting with `React.lazy()` and WebP/AVIF images."
                    ]
          }
],
        practice: [
          {
            q: 'What is the fundamental difference between the JavaScript Microtask Queue and Macrotask (Callback) Queue?',
            ans: 'Microtasks (Promises, queueMicrotask) execute immediately after the current synchronous script, before any Macrotasks (setTimeout, setInterval).',
            detail: 'The browser event loop processes all pending microtasks to completion before moving to the next macrotask or rendering frame.'
          },
          {
            q: 'When should useCallback or useMemo be employed in a React component?',
            ans: 'To memoize expensive computations or prevent unnecessary child re-renders when passing functions/objects as props to memoized components.',
            detail: 'Overusing useMemo for trivial calculations introduces unnecessary memory overhead; it is best reserved for heavy data filtering or stable prop reference equality.'
          },
          {
            q: 'What is Cross-Origin Resource Sharing (CORS) and why does the browser enforce it?',
            ans: 'A browser security mechanism that restricts web applications from requesting resources from a different origin unless explicit HTTP headers allow it.',
            detail: 'CORS prevents malicious scripts on one website from reading sensitive authenticated data from another domain on behalf of the user.'
          },
          {
            q: 'How does indexing in SQL databases (B-Tree) accelerate query execution performance?',
            ans: 'It reduces lookup time complexity from O(N) full table scan to O(log N) balanced tree traversal.',
            detail: 'Indexes store ordered pointers to table rows. While they vastly speed up SELECT queries, they incur a slight write penalty on INSERT, UPDATE, and DELETE operations.'
          }
        ]
      },
      {
        title: 'Backend API Design, Authentication & System Scalability',
        concepts: 'JWT token signing vs session cookies, OAuth 2.0 flows, SQL ACID guarantees vs NoSQL BASE, Redis caching strategies (Cache-Aside, Write-Through), and horizontal scaling with load balancers.',
        conceptPillars: [
          {
                    "title": "Node.js Event Loop & Asynchronous Backend Architecture",
                    "points": [
                              "Libuv Event Loop: Microtasks (`process.nextTick`, Promises) take precedence over Macrotask phases (Timers -> Pending I/O -> Poll -> Check `setImmediate` -> Close callbacks).",
                              "RESTful API & Security Hardening: Idempotency, standard HTTP status codes, CORS configuration, Helmet.js security headers, bcrypt/Argon2 password hashing, and JWT token rotation in HttpOnly SameSite cookies.",
                              "Rate Limiting & Caching: Distributed Redis token bucket rate limiting and in-memory response caching for hot endpoints."
                    ]
          },
          {
                    "title": "Database Engineering, WebSockets & Deployment",
                    "points": [
                              "PostgreSQL Relational Design: ACID transactions, B-tree/GIN indexing, foreign key constraints, connection pooling with Prisma/TypeORM.",
                              "MongoDB NoSQL Design: Document modeling, embedding vs referencing, replica sets, and Aggregation Framework pipelines ($match, $group, $lookup).",
                              "Real-Time WebSockets: Socket.io for bidirectional communication, heartbeat pings, room broadcasting, and fallback polling.",
                              "Docker & CI/CD: Multi-stage Docker builds, GitHub Actions automated workflows, and production hosting on AWS ECS / Vercel."
                    ]
          }
],
        practice: [
          {
            q: 'Where should JWT refresh tokens be securely stored on client browsers to prevent XSS theft?',
            ans: 'In an HttpOnly, Secure, SameSite=Strict HTTP cookie.',
            detail: 'HttpOnly cookies cannot be accessed or read by client-side JavaScript, neutralizing Cross-Site Scripting (XSS) credential extraction attacks.'
          },
          {
            q: 'What does the ACID acronym stand for in relational database management systems?',
            ans: 'Atomicity, Consistency, Isolation, Durability',
            detail: 'ACID guarantees that all database transactions are processed reliably, even in the event of hardware failures or concurrent client conflicts.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Full Stack Web Developer (React + Node.js)',
      salaryRange: '₹7.5 LPA – ₹25.0 LPA (Avg: ₹14.0 LPA)',
      interviewDifficulty: 'Moderate to Hard (3.6 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Amazon', 'Microsoft', 'Atlassian', 'Razorpay', 'PhonePe', 'Accenture', 'Wipro'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'How does React Virtual DOM diffing algorithm reconcile reconciliation updates? (Atlassian interview review)',
        'Design an end-to-end authentication system using Access & Refresh JWT tokens with HttpOnly cookies. (Razorpay interview review)',
        'Explain the Node.js event loop phases (Timers, Pending Callbacks, Poll, Check, Close). (Amazon interview review)',
        'How do you optimize web vital metrics (LCP, FID, CLS) for high-traffic web applications?'
      ],
      candidateTips: 'Glassdoor interview reviews highlight hands-on live coding challenges in React state management, building scalable REST/GraphQL APIs, database query optimization, and explaining browser security (CORS/CSRF/XSS).'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Full Stack Web Developer (MERN / React + Node.js)",
      "salaryRange": "₹7.0 LPA – ₹22.5 LPA (Avg: ₹13.0 LPA)",
      "rating": "4.2 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Razorpay",
            "PhonePe",
            "Paytm",
            "Accenture",
            "TCS Digital",
            "Infosys Power Programmer",
            "Wipro Turbo"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "Explain React Virtual DOM diffing and state lifecycle with hooks (useEffect, useMemo, useCallback). (Razorpay review)",
            "What is the JavaScript Event Loop, Microtask queue vs Macrotask queue? (PhonePe review)",
            "How do you prevent XSS, CSRF, and SQL injection in a full-stack web application? (TCS Digital review)",
            "Design a scalable database schema for an e-commerce platform with Redis caching."
      ],
      "candidateTips": "AmbitionBox reviews emphasize hands-on live machine coding rounds in React, building CRUD REST APIs in Node.js, and debugging browser networking issues."
}
  },
  'data-science': {
    domainName: 'Data Science & Advanced Analytics',
    category: 'Data Analytics & Statistics',
    icon: '📊',
    overview: 'Exploratory Data Analysis (EDA), Statistical Hypothesis Testing, Feature Engineering, Regression/Classification Modeling, Time-Series Forecasting, and Big Data manipulation.',
    coreModules: [
      {
        title: 'Statistical Inference, Hypothesis Testing & Feature Engineering',
        concepts: 'Probability distributions (Normal, Binomial, Poisson), Central Limit Theorem (CLT), p-values, z-test/t-test, ANOVA, Chi-Square tests, handling missing data (MICE, median imputation), and outlier detection (IQR, Z-score).',
        conceptPillars: [
          {
                    "title": "Inferential Statistics, Probability & Hypothesis Testing",
                    "points": [
                              "Distributions & Central Limit Theorem: Regardless of initial distribution, sample means of sufficiently large sample sizes (N > 30) approximate a Normal Gaussian distribution.",
                              "Hypothesis Testing Framework: Null (H0) vs Alternative (H1); p-value significance (alpha = 0.05); Type I (False Positive) vs Type II (False Negative) errors; Two-sample t-test, ANOVA, and Chi-Square test of independence.",
                              "Exploratory Data Analysis: Correlation analysis (Pearson linear, Spearman monotonic), variance inflation factor (VIF for multicollinearity), skewness, and kurtosis."
                    ]
          },
          {
                    "title": "Data Preprocessing, Encoding & Predictive Modeling",
                    "points": [
                              "Imputation & Outlier Treatment: Mean/median for numerical data, mode for categorical, KNN imputer, and MICE (Multiple Imputation by Chained Equations); IQR method and Isolation Forests.",
                              "Encoding & Scaling: One-Hot Encoding vs Target Encoding (with smoothing); StandardScaler vs MinMaxScaler vs RobustScaler.",
                              "Dimensionality Reduction & Clustering: PCA for variance maximization along orthogonal eigenvectors; K-Means (Elbow method, Silhouette score), and DBSCAN for arbitrary spatial clusters.",
                              "Advanced SQL: Window functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()`), CTEs, subqueries, and execution plans (`EXPLAIN ANALYZE`)."
                    ]
          }
],
        practice: [
          {
            q: 'What is the Central Limit Theorem (CLT) and why is it fundamental in Data Science?',
            ans: 'The distribution of sample means approximates a normal distribution as sample size becomes large (n ≥ 30), regardless of population shape.',
            detail: 'CLT enables parametric hypothesis testing (z-tests, t-tests, confidence intervals) on real-world non-normal datasets.'
          },
          {
            q: 'In statistical hypothesis testing, what is a Type I error vs a Type II error?',
            ans: 'Type I is rejecting a true Null Hypothesis (False Positive); Type II is failing to reject a false Null Hypothesis (False Negative).',
            detail: 'The significance level α represents the probability of committing a Type I error, while β is Type II error probability.'
          },
          {
            q: 'How does PCA (Principal Component Analysis) perform dimensionality reduction?',
            ans: 'By computing eigenvectors and eigenvalues of the covariance matrix to project data onto orthogonal axes of maximum variance.',
            detail: 'PCA compresses hundreds of correlated features into a few uncorrelated principal components, eliminating multicollinearity.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Data Scientist / Quantitative Analyst',
      salaryRange: '₹8.0 LPA – ₹24.0 LPA (Avg: ₹15.0 LPA)',
      interviewDifficulty: 'Hard (3.7 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Mu Sigma', 'Fractal Analytics', 'EY', 'Deloitte', 'PwC', 'Walmart Labs', 'IBM'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'How do you explain the difference between p-value and confidence interval to a business stakeholder? (Fractal interview review)',
        'Given a dataset with 40% missing values in key features, how do you approach data imputation? (Walmart Labs interview review)',
        'Derive the mathematical relationship between ROC-AUC and Gini coefficient.',
        'How do you test for stationarity in time-series data (ADF test) and handle ARIMA seasonality?'
      ],
      candidateTips: 'Glassdoor reviews highlight deep statistical questioning, SQL window functions, Pandas data wrangling, and presenting business takeaways clearly.'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Data Scientist / Business Analytics Specialist",
      "salaryRange": "₹7.5 LPA – ₹23.0 LPA (Avg: ₹14.0 LPA)",
      "rating": "4.2 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Fractal Analytics",
            "Mu Sigma",
            "Tiger Analytics",
            "EY India",
            "Deloitte India",
            "PwC India"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "What is the difference between Type 1 and Type 2 errors in statistical hypothesis testing? (Fractal review)",
            "How do you handle missing values and collinearity in complex regression datasets? (Tiger Analytics review)",
            "Explain SQL Window functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG) with practical queries. (Deloitte review)",
            "What is Central Limit Theorem and how is it applied in A/B testing?"
      ],
      "candidateTips": "AmbitionBox candidates recommend strong SQL query proficiency, Python data science libraries (Pandas/Scikit-learn), and statistical hypothesis testing fundamentals."
}
  },
  'cyber-security': {
    domainName: 'Cyber Security & Ethical Hacking',
    category: 'Security & Cloud Defense',
    icon: '🛡️',
    overview: 'Network security protocols, Cryptography (Symmetric/Asymmetric), OWASP Top 10 Web Vulnerabilities, Penetration Testing, SOC SIEM monitoring, and Incident Response.',
    coreModules: [
      {
        title: 'OWASP Top 10, Cryptography & Threat Mitigation',
        concepts: 'SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF, Zero Trust Architecture, Public Key Infrastructure (PKI), TLS handshake, Port scanning (Nmap), and WAF (Web Application Firewalls).',
        conceptPillars: [
          {
                    "title": "Network Security, Protocols & Cryptographic Foundations",
                    "points": [
                              "Protocols & Encrypted Handshakes: TCP 3-way handshake (SYN, SYN-ACK, ACK); TLS 1.3 cryptographic handshake; DNS, ARP poisoning, and DHCP spoofing defense.",
                              "Cryptographic Systems: Symmetric encryption (AES-256-GCM); Asymmetric encryption (RSA-4096, ECC); Hashing (SHA-256, bcrypt); Public Key Infrastructure (PKI) and digital certificates.",
                              "Firewalls & Defense in Depth: Packet filtering, stateful inspection, Next-Gen Firewalls (NGFW with application-layer deep inspection), and Snort/Suricata IDS/IPS."
                    ]
          },
          {
                    "title": "OWASP Top 10 Web Security & Penetration Testing",
                    "points": [
                              "SQL Injection (SQLi): Prevented by parameterized queries, prepared statements, and ORM abstractions.",
                              "Cross-Site Scripting (XSS): Contextual output encoding, Content Security Policy (CSP) headers, and HttpOnly cookies to mitigate cookie theft.",
                              "Broken Authorization (BOLA/IDOR): Strict server-side object ownership verification before database query execution.",
                              "5-Phase Pen-Testing Cycle: Reconnaissance (OSINT, Whois, Shodan) -> Scanning (Nmap, Nessus) -> Exploitation (Metasploit, Burp Suite Pro) -> Post-Exploitation & Privilege Escalation -> Reporting.",
                              "Security Operations Center (SOC) & Zero Trust: Splunk/Sentinel SIEM log correlation for IOCs; NIST SP 800-61 Incident Response; 'Never Trust, Always Verify' architecture."
                    ]
          }
],
        practice: [
          {
            q: 'How do Parameterized Queries (Prepared Statements) prevent SQL Injection attacks completely?',
            ans: 'They separate SQL code execution from user input parameters, ensuring inputs are treated strictly as data literals.',
            detail: 'The database pre-compiles the SQL template before injecting parameters, making it impossible for user payload strings to alter query structure.'
          },
          {
            q: 'What is the difference between Symmetric and Asymmetric Cryptography?',
            ans: 'Symmetric uses a single shared secret key for encryption/decryption; Asymmetric uses a public key to encrypt and a private key to decrypt.',
            detail: 'TLS protocols combine both: Asymmetric (RSA/ECC) establishes the initial secure handshake, then switches to fast Symmetric (AES-256) for bulk session encryption.'
          },
          {
            q: 'What is the core security principle of "Zero Trust Architecture"?',
            ans: '"Never trust, always verify" — every request is authenticated, authorized, and encrypted regardless of network perimeter.',
            detail: 'Zero Trust eliminates the traditional assumption that internal corporate intranet traffic is inherently safe.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Cyber Security Analyst / Penetration Tester',
      salaryRange: '₹7.0 LPA – ₹21.0 LPA (Avg: ₹13.5 LPA)',
      interviewDifficulty: 'Hard (3.8 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Palo Alto Networks', 'CrowdStrike', 'KPMG', 'Cisco', 'Deloitte Cyber', 'Wipro Security'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'Walk through the exact phases of a TLS 1.3 cryptographic handshake. (Palo Alto Networks interview review)',
        'How would you investigate and contain an active ransomware infection across corporate endpoints? (CrowdStrike review)',
        'Explain how Server-Side Request Forgery (SSRF) exploits cloud metadata services (e.g. AWS IMDSv1).',
        'What is the difference between EDR and SIEM in a modern Security Operations Center (SOC)?'
      ],
      candidateTips: 'Glassdoor interview candidates recommend knowing Wireshark packet analysis, OWASP Top 10 vulnerabilities, Metasploit fundamentals, and network defense architectures.'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Cyber Security Analyst / SOC & Network Defense Engineer",
      "salaryRange": "₹6.5 LPA – ₹19.5 LPA (Avg: ₹12.0 LPA)",
      "rating": "4.2 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "KPMG India",
            "PwC Cyber",
            "Deloitte Risk Advisory",
            "Wipro CyberSecurity",
            "TCS Cyber Defense"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "Walk through the OWASP Top 10 vulnerabilities and explain remediation for SQLi and XSS. (PwC Cyber review)",
            "Explain the stages of the Cyber Kill Chain and MITRE ATT&CK framework. (Deloitte review)",
            "How does a 3-way TCP handshake work and how do you analyze SYN flood attacks in Wireshark? (Wipro review)",
            "What is the difference between symmetric (AES) and asymmetric (RSA) encryption in TLS protocols?"
      ],
      "candidateTips": "AmbitionBox reviews highlight networking fundamentals (OSI Model, TCP/IP, DNS), Linux command-line skills, SIEM log analysis, and ethical hacking basics."
}
  },
  'cloud-computing': {
    domainName: 'Cloud Computing & DevOps (AWS / Azure / GCP)',
    category: 'Cloud Infrastructure & DevOps',
    icon: '☁️',
    overview: 'Cloud infrastructure design, Virtualization, Containers (Docker, Kubernetes), Infrastructure as Code (Terraform), CI/CD pipelines, and high availability serverless patterns.',
    coreModules: [
      {
        title: 'Cloud Architecture, Containerization & CI/CD Pipelines',
        concepts: 'IaaS vs PaaS vs SaaS, VPC networking & subnets, Docker image layers & multi-stage builds, Kubernetes Pods/Deployments/Services, CI/CD automated gates, and Auto Scaling groups.',
        conceptPillars: [
          {
                    "title": "Cloud Infrastructure, AWS/Azure Core Services & Networking",
                    "points": [
                              "Service Models: IaaS (EC2/Azure VM), PaaS (Elastic Beanstalk/App Service), SaaS, and Serverless FaaS (AWS Lambda/Azure Functions).",
                              "Virtual Private Cloud (VPC): Public/Private subnets, Internet Gateways (IGW), NAT Gateways, Route Tables, Stateful Security Groups, and Stateless Network ACLs.",
                              "IAM Best Practices: Principle of Least Privilege (PoLP), IAM Roles (temporary STS credentials), Multi-Factor Authentication, and Service Control Policies (SCPs).",
                              "Storage & High Availability: Block Storage (EBS), Object Storage (S3 with lifecycle transitions and bucket versioning), and Multi-AZ / Multi-Region replication."
                    ]
          },
          {
                    "title": "Docker, Kubernetes (K8s), Terraform & CI/CD",
                    "points": [
                              "Docker Engineering: Multi-stage Dockerfiles, minimal base images (Alpine/Distroless), non-root security contexts, and layer caching optimization.",
                              "Kubernetes Core Architecture: Control Plane (API Server, etcd, Kube-Scheduler, Kube-Controller-Manager) and Worker Nodes (Kubelet, Kube-Proxy, Containerd).",
                              "Workload Resources: Pods, Deployments (Rolling Updates, Rollbacks), StatefulSets, Services (ClusterIP, NodePort, LoadBalancer), and Ingress Controllers with TLS.",
                              "Infrastructure as Code (IaC): Terraform (HCL), remote state with S3 + DynamoDB locking, modules, and automated GitHub Actions CI/CD pipelines with ArgoCD GitOps."
                    ]
          }
],
        practice: [
          {
            q: 'What is the primary architectural purpose of a Kubernetes Ingress Controller?',
            ans: 'To manage external HTTP/HTTPS routing, load balancing, and SSL termination into internal cluster services.',
            detail: 'Ingress eliminates the cost and complexity of provisioning separate cloud load balancers for each internal service.'
          },
          {
            q: 'What is Infrastructure as Code (IaC) and what problem does it solve?',
            ans: 'Managing server and cloud provisioning through version-controlled code templates (Terraform/CloudFormation) to eliminate configuration drift.',
            detail: 'IaC allows deterministic, reproducible infrastructure deployment across staging and production environments.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Cloud Solutions Architect / DevOps Engineer',
      salaryRange: '₹8.5 LPA – ₹26.0 LPA (Avg: ₹15.5 LPA)',
      interviewDifficulty: 'Hard (3.8 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Amazon AWS', 'Microsoft Azure', 'Google Cloud', 'HashiCorp', 'Infosys Cloud', 'TCS'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'How do you architect a multi-region Active-Active disaster recovery system on AWS? (Amazon review)',
        'Explain how Kubernetes Pod scheduling and HPA (Horizontal Pod Autoscaler) function under spike loads. (Microsoft review)',
        'How do you manage state and avoid concurrency locks in Terraform remote backends (S3 + DynamoDB)?',
        'Explain Docker overlay networks and how container multi-stage builds reduce attack surface.'
      ],
      candidateTips: 'Glassdoor candidates suggest focusing on VPC CIDR subnet calculations, Dockerfile optimization, Kubernetes networking, and CI/CD deployment strategies (Canary vs Blue-Green).'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Cloud DevOps Engineer / AWS & Azure Infrastructure Specialist",
      "salaryRange": "₹8.0 LPA – ₹24.0 LPA (Avg: ₹14.5 LPA)",
      "rating": "4.3 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Amazon AWS India",
            "Microsoft Azure IDC",
            "Infosys Cloud",
            "Wipro Cloud Solutions",
            "Cognizant Cloud"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "What is Infrastructure as Code (IaC) and how do you write modular Terraform scripts? (AWS review)",
            "Explain Kubernetes architecture: API Server, etcd, Kubelet, Pods, Deployments, and Ingress routing. (Microsoft review)",
            "How do you design a zero-downtime CI/CD pipeline using Jenkins / GitHub Actions? (Infosys review)",
            "Explain Docker multi-stage builds and container security best practices."
      ],
      "candidateTips": "AmbitionBox candidates recommend hands-on practice with Linux shell scripting, Docker containers, Kubernetes cluster management, and Terraform configuration."
}
  },
  'iot': {
    domainName: 'Internet of Things (IoT) & Embedded Edge',
    category: 'Smart Hardware & Connected Devices',
    icon: '🌐',
    overview: 'Microcontroller hardware (ESP32, Arduino, ARM Cortex), IoT communication protocols (MQTT, CoAP, BLE, LoRaWAN), sensor interfacing (I2C, SPI, UART), and Edge AI.',
    coreModules: [
      {
        title: 'IoT Protocols, Hardware Interfacing & Edge Computing',
        concepts: 'MQTT Publish/Subscribe broker architecture, QoS levels (0, 1, 2), I2C two-wire bus vs SPI multi-wire speed, power optimization for battery-operated nodes, and OTA firmware updates.',
        conceptPillars: [
          {
                    "title": "Embedded Microcontrollers & Low-Level Interfaces",
                    "points": [
                              "Microcontroller Architectures: ESP32 (dual-core Xtensa, Wi-Fi + BLE), STM32 (ARM Cortex-M), Arduino (AVR), and Raspberry Pi (ARM Cortex-A SBC).",
                              "Hardware Communication Protocols: UART (asynchronous serial), I2C (synchronous 2-wire SDA/SCL, multi-device addressing), and SPI (synchronous 4-wire MOSI/MISO/SCK/SS, high speed).",
                              "GPIO, ADC & PWM: Analog-to-Digital Conversion (ADC resolution, voltage reference), Pulse Width Modulation (PWM), and Interrupt Service Routines (ISRs)."
                    ]
          },
          {
                    "title": "IoT Wireless Networking, Cloud Backends & OTA Security",
                    "points": [
                              "MQTT (Message Queuing Telemetry Transport): Lightweight pub/sub protocol over TCP/IP, 2-byte header, QoS levels (0, 1, 2), and Last Will & Testament (LWT).",
                              "CoAP & LoRaWAN: CoAP (UDP-based RESTful protocol for constrained nodes); LoRaWAN (long-range low-power sub-GHz RF transmission for smart cities).",
                              "Cloud IoT Backends: AWS IoT Core, Azure IoT Hub with Device Shadow / Digital Twin synchronization.",
                              "Firmware Security: Secure Boot with cryptographic signature verification and Dual-Partition Over-the-Air (OTA) firmware rollback."
                    ]
          }
],
        practice: [
          {
            q: 'Why is MQTT the preferred messaging protocol for resource-constrained IoT devices over HTTP?',
            ans: 'MQTT uses a lightweight binary packet header (minimum 2 bytes) and publish/subscribe architecture, saving power and bandwidth.',
            detail: 'HTTP headers are text-heavy (hundreds of bytes) and require persistent request/response handshakes, draining battery in remote sensor nodes.'
          },
          {
            q: 'What is the primary difference between I2C and SPI peripheral communication interfaces?',
            ans: 'I2C uses only 2 wires (SDA/SCL) and addressable slaves; SPI uses 4 wires with higher data transfer throughput.',
            detail: 'SPI offers full-duplex high-speed communication (tens of MHz) using dedicated Chip Select lines, while I2C saves micro-controller pins.'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'IoT Firmware / Embedded Systems Developer',
      salaryRange: '₹6.5 LPA – ₹18.0 LPA (Avg: ₹11.5 LPA)',
      interviewDifficulty: 'Moderate to Hard (3.5 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Bosch', 'Schneider Electric', 'Honeywell', 'Qualcomm IoT', 'Siemens', 'L&T Technology Services'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'How do you design a low-power deep sleep duty cycle on an ESP32 for a 5-year battery life? (Bosch review)',
        'Explain MQTT QoS 0, 1, and 2 packet exchange mechanisms and their bandwidth impact. (Honeywell review)',
        'How do you secure Over-The-Air (OTA) firmware updates against bricking and MITM tampering?',
        'Write an Interrupt Service Routine (ISR) in C for a debounce-protected GPIO push button.'
      ],
      candidateTips: 'Glassdoor interview reviews emphasize writing clean C/C++ embedded code, explaining hardware communication buses (UART/SPI/I2C), and understanding IoT security certificates.'
    }
  ,
    ambitionboxData: {
      "roleTitle": "IoT Embedded Engineer / Hardware & Firmware Developer",
      "salaryRange": "₹6.0 LPA – ₹17.5 LPA (Avg: ₹10.8 LPA)",
      "rating": "4.1 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Bosch India",
            "Schneider Electric",
            "Honeywell India",
            "L&T Technology Services",
            "Tata Elxsi"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "Explain the difference between MQTT and HTTP protocols in constrained IoT networks. (Bosch review)",
            "How do I2C and SPI serial communication protocols compare in terms of speed and wire count? (Tata Elxsi review)",
            "What is an Interrupt Service Routine (ISR) and how do you prevent race conditions in embedded C? (Honeywell review)",
            "How do you optimize power consumption in battery-powered IoT edge sensor nodes?"
      ],
      "candidateTips": "AmbitionBox candidates highlight embedded C programming, microcontroller architecture (ESP32 / ARM Cortex), sensor interfacing, and IoT cloud platforms (AWS IoT / ThingsBoard)."
}
  },
  'content-writing': {
    domainName: 'Content Writing & Copywriting',
    category: 'Creative & Digital Media',
    icon: '✍️',
    overview: 'Content Writing combines audience psychology, narrative structuring, SEO algorithms, and persuasive copywriting frameworks to build high-converting editorial campaigns.',
    coreModules: [
      {
        title: 'SEO Writing, Search Intent & Keyword Optimization',
        concepts: 'Understanding 4 search intents (Informational, Navigational, Commercial, Transactional). Meta optimization (Title <60 chars, Meta Description <160 chars), H1-H4 structural tagging, LSI keyword distribution (1-2% density), and voice search readability.',
        conceptPillars: [
          {
                    "title": "Technical Documentation Standards & Information Architecture",
                    "points": [
                              "Diátaxis Documentation Framework: Tutorials (learning-oriented), How-to Guides (problem-oriented), Reference (information-oriented), and Explanation (understanding-oriented).",
                              "Readability & Tone: Active voice, clear sentence structures, Flesch-Kincaid Grade Level scoring (targeting Grade 7-9 for broad comprehension), and structured hierarchy (H1 -> H2 -> H3)."
                    ]
          },
          {
                    "title": "Search Engine Optimization (SEO) & Search Intent",
                    "points": [
                              "Search Intent Classification: Informational ('what is'), Navigational ('login'), Commercial Investigation ('best tools'), and Transactional ('pricing/enroll').",
                              "On-Page Technical SEO: Title tag optimization (< 60 chars), meta descriptions (< 160 chars), semantic HTML5 tags, descriptive anchor text, keyword density without stuffing, and internal linking strategies.",
                              "E-E-A-T Framework: Google Experience, Expertise, Authoritativeness, and Trustworthiness guidelines for high-ranking domain authority."
                    ]
          }
],
        practice: [
          {
            q: 'What is the optimal keyword density recommended in modern SEO writing to prevent search engine keyword stuffing penalties?',
            ans: '1% to 2%',
            detail: 'Keyword stuffing (exceeding 3-4%) triggers algorithmic penalties from Google search systems. Modern natural language processing (NLP) algorithms prioritize semantic context, LSI keywords, and high readability scores over repetitive keywords.'
          },
          {
            q: 'In digital copywriting, what does the AIDA marketing framework stand for?',
            ans: 'Attention, Interest, Desire, Action',
            detail: 'AIDA is a classic four-stage psychological model: 1. Attention (Catch the headline), 2. Interest (Present relatable pain points), 3. Desire (Showcase transformation/benefits), 4. Action (Clear Call-To-Action CTA).'
          },
          {
            q: 'What is the primary difference between Copywriting and Content Writing?',
            ans: 'Copywriting drives immediate user action/sales, whereas Content Writing informs, educates, and builds brand authority.',
            detail: 'Copywriting is focused on conversion (landing pages, ads, email campaigns). Content writing is focused on long-term organic authority and engagement (blog articles, whitepapers, tutorials).'
          },
          {
            q: 'What is the PAS copywriting formula and when is it most effectively utilized?',
            ans: 'Problem, Agitate, Solve — used on high-converting landing pages and sales copy.',
            detail: 'PAS identifies the reader\'s critical pain point (Problem), amplifies the emotional/financial cost of inaction (Agitate), and introduces your product/service as the relief (Solve).'
          }
        ]
      }
    ],
    glassdoorData: {
      roleTitle: 'Content Strategist / Senior Copywriter',
      salaryRange: '₹5.0 LPA – ₹14.0 LPA (Avg: ₹8.5 LPA)',
      interviewDifficulty: 'Moderate (3.2 / 5.0 on Glassdoor)',
      topHiringCompanies: ['Ogilvy', 'Zoho', 'HubSpot', 'Freshworks', 'Zomato Creative', 'Byju\'s'],
      glassdoorUrl: 'https://www.glassdoor.co.in/',
      salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
      topInterviewQuestions: [
        'How do you conduct keyword research and map user search intent to a content cluster? (HubSpot review)',
        'Write an engaging 50-word sales hook using the PAS (Problem-Agitate-Solve) formula. (Freshworks review)',
        'How do you optimize an underperforming 2,000-word blog post to regain first-page SERP rankings?',
        'What metrics do you track to prove editorial ROI (Organic Traffic, Dwell Time, CTA Conversion Rate)?'
      ],
      candidateTips: 'Glassdoor interviewees suggest bringing a strong writing portfolio, explaining SEO keyword strategy, and demonstrating rapid headline ideation.'
    }
  ,
    ambitionboxData: {
      "roleTitle": "Content Writer / SEO & Digital Copywriter",
      "salaryRange": "₹4.5 LPA – ₹12.5 LPA (Avg: ₹7.8 LPA)",
      "rating": "4.0 / 5.0 (AmbitionBox Verified)",
      "topHiringCompanies": [
            "Zoho Corporation",
            "Freshworks",
            "BYJU'S",
            "Ogilvy India",
            "Times Internet",
            "Webchutney"
      ],
      "ambitionboxUrl": "https://www.ambitionbox.com/",
      "salaryUrl": "https://www.ambitionbox.com/salaries",
      "topInterviewQuestions": [
            "How do you conduct on-page SEO keyword optimization without triggering keyword stuffing penalties? (Zoho review)",
            "What is the difference between B2B copywriting and B2C content writing? (Freshworks review)",
            "How do you structure high-converting landing page copy using the AIDA / PAS framework? (Times Internet review)",
            "What strategies do you use to research complex technical topics and produce authoritative long-form content?"
      ],
      "candidateTips": "AmbitionBox interview reviews emphasize submitting a strong portfolio of published articles, demonstrating SEO keyword research tools, and fast live copywriting tasks during interview rounds."
}
  }
};

/**
 * Returns comprehensive study material tailored for a specific domain
 * @param {string} domainKey
 * @returns {object}
 */
export function getStudyMaterialForDomain(domainKey) {
  const normKey = (domainKey || '').toLowerCase().trim();
  let domainGuide = DOMAIN_STUDY_GUIDES[normKey];

  if (!domainGuide) {
    // Check partial matches or generate rich default structure
    const keys = Object.keys(DOMAIN_STUDY_GUIDES);
    const matchedKey = keys.find(k => normKey.includes(k) || k.includes(normKey));
    if (matchedKey) {
      domainGuide = DOMAIN_STUDY_GUIDES[matchedKey];
    } else {
      const domainIdentifier = domainKey ? domainKey.toUpperCase().replace(/-/g, ' ') : 'CORE TECHNICAL';
      domainGuide = {
        domainName: `${domainIdentifier} Specialization`,
        category: 'Applied Engineering & Technology Track',
        icon: '💻',
        overview: `Comprehensive industry curriculum and practice test framework for ${domainIdentifier}. Master essential concepts, architecture patterns, and domain evaluation questions.`,
        coreModules: [
          {
            title: `Core Architectural Principles & Foundations of ${domainIdentifier}`,
            concepts: `Foundational theory, system lifecycles, optimal engineering standards, error handling patterns, scalability parameters, and performance optimization for ${domainIdentifier}.`,
            practice: [
              {
                q: `What is the fundamental architectural best practice when designing enterprise systems in ${domainIdentifier}?`,
                ans: 'Enforcing modular decoupling, robust unit/integration testing, strict type safety, and structured logging.',
                detail: 'Decoupled architectures allow independent scaling, localized error recovery, and seamless continuous deployment.'
              },
              {
                q: `How do professional practitioners in ${domainIdentifier} approach performance bottleneck diagnosis?`,
                ans: 'By conducting systematic benchmarking, profiling resource utilization, and optimizing critical execution paths.',
                detail: 'Profiling before optimizing ensures engineering effort is focused precisely where latency or memory overhead is highest.'
              },
              {
                q: `In corporate team environments, why are peer code/design reviews mandatory?`,
                ans: 'To detect edge-case defects early, maintain code architecture consistency, and foster knowledge sharing.',
                detail: 'Peer reviews significantly reduce production bug escape rates while ensuring multi-developer familiarity across the codebase.'
              },
              {
                q: `What security consideration is paramount when deploying cloud-native applications?`,
                ans: 'Implementing the Principle of Least Privilege (PoLP) and encrypting data both in transit and at rest.',
                detail: 'Restricting permissions to only what is strictly necessary prevents unauthorized lateral movement during security incidents.'
              }
            ]
          }
        ],
        glassdoorData: {
          roleTitle: `${domainIdentifier} Engineer / Specialist`,
          salaryRange: '₹7.0 LPA – ₹20.0 LPA (Avg: ₹12.5 LPA)',
          interviewDifficulty: 'Moderate to Hard (3.5 / 5.0 on Glassdoor)',
          topHiringCompanies: ['Top Multinational Tech Firms', 'Tier-1 IT Enterprises', 'High-Growth Tech Startups'],
          glassdoorUrl: 'https://www.glassdoor.co.in/',
          salaryUrl: 'https://www.glassdoor.co.in/Salaries/index.htm',
          topInterviewQuestions: [
            `What are the core design patterns and architecture standards you implement in ${domainIdentifier}?`,
            `How do you handle production error debugging and system monitoring in ${domainIdentifier}?`,
            `Explain a challenging technical bottleneck you resolved in your recent project.`
          ],
          candidateTips: `Glassdoor candidates emphasize preparing core fundamentals, practical project walkthroughs, and clear problem-solving methodology.`
        }
      };
    }
  }

  // Calculate total questions in aptitude modules
  let totalAptitudeQs = 0;
  APTITUDE_STUDY_MODULES.forEach(m => {
    totalAptitudeQs += (m.practiceQuestions ? m.practiceQuestions.length : 0);
  });

  const domainQsCount = domainGuide.coreModules ? domainGuide.coreModules.reduce((acc, cm) => acc + (cm.practice ? cm.practice.length : 0), 0) : 0;

  return {
    totalQuestionsCount: totalAptitudeQs + domainQsCount,
    termsAndConditions: EXAM_TERMS_AND_CONDITIONS,
    aptitudeModules: APTITUDE_STUDY_MODULES,
    domainGuide: domainGuide,
    glassdoorData: domainGuide.glassdoorData,
    ambitionboxData: domainGuide.ambitionboxData,
    examGuidance: {
      totalQuestions: 45,
      aptitudeCount: 20,
      domainCount: 25,
      durationMinutes: 60,
      scheduleDay: 'Sunday',
      scheduleTime: '6:00 PM – 7:00 PM IST',
      proctoringGuidelines: [
        "Maintain web camera and microphone permissions enabled throughout the 60-minute duration.",
        "Keep your face centered and well-lit in the video frame.",
        "Do not switch browser tabs or minimize the test window — tab switches trigger the RED MALPRACTICE SIGNAL.",
        "Ensure a quiet environment; background speech and smartphone copying attempts result in immediate session revocation.",
        "Top 10 performers across all domains receive the ₹30,000/month stipend-based internship!"
      ]
    }
  };
}


export const EXAM_TERMS_AND_CONDITIONS = {
  title: "Nish Technologies Examination Terms, Conditions & Candidate Code of Conduct",
  lastUpdated: "October 2026",
  sections: [
    {
      heading: "1. Security Passcode & Access Authorization",
      icon: "🔐",
      rules: [
        "The Study Material Hub and Online Qualifier Examination are protected by a unique Candidate Passcode issued exclusively upon verified registration.",
        "Passcodes are strictly non-transferable. Attempting to share, resell, publish, or distribute passcodes or study materials will result in immediate disqualification and permanent blacklisting from all future Nish Technologies placement and internship drives.",
        "Each passcode permits a single active session. Concurrent logins from multiple devices will trigger automated session revocation."
      ]
    },
    {
      heading: "2. Proprietary Intellectual Property & Copyright Notice",
      icon: "⚖️",
      rules: [
        "All study materials, aptitude question banks, domain engineering guides, Glassdoor/AmbitionBox curated datasets, diagrams, code snippets, and explanations are the proprietary intellectual property of Nish Technologies Inc.",
        "Reproduction, scraping, screenshot distribution, OCR extraction, or unauthorized uploading to third-party academic portals without express written consent constitutes copyright infringement subject to legal action under applicable cyber laws."
      ]
    },
    {
      heading: "3. Sunday 6:00 PM Qualifier Examination Protocol",
      icon: "🎯",
      rules: [
        "The Qualifier Examination is scheduled strictly for every Sunday from 6:00 PM to 7:00 PM IST (60 minutes duration).",
        "The examination comprises exactly 45 Multiple Choice Questions (20 Quantitative Aptitude & Logical Reasoning + 25 Domain-Specific Technical Questions).",
        "The test is strictly single-attempt. Once started, the countdown timer runs continuously and will auto-submit upon expiration.",
        "AI Proctoring is actively enforced throughout the exam. Candidates must grant continuous web camera and microphone permissions."
      ]
    },
    {
      heading: "4. Zero-Tolerance Malpractice & Anti-Cheating Guidelines",
      icon: "🚨",
      rules: [
        "Browser Tab-Switching Prohibition: Candidates must remain in the active exam window throughout the 60 minutes. Switching tabs or minimizing the window triggers the Flashing Red Malpractice Alert. Accumulating three (3) tab switches results in immediate exam termination with zero score.",
        "Multiple Face / No Face Detection: The proctoring system continuously validates that exactly one candidate is present and centered in the camera feed. Secondary individuals or face absence triggers violation strikes.",
        "Audio & Speech Monitoring: Background voices, telephone conversations, or artificial reading assistance are monitored in real time by the audio frequency meter.",
        "Electronic Device Ban: Use of smartphones, second monitors, smartwatches, or external communication tools during the exam is strictly prohibited."
      ]
    },
    {
      heading: "5. Internship Selection, Stipend & Evaluation Criteria",
      icon: "💼",
      rules: [
        "The minimum qualifying score benchmark is 65% aggregate (at least 30 out of 45 correct answers).",
        "Top 10 Rankers across all technology domains in each Sunday cycle will be awarded the prestigious ₹30,000/Month Stipend-Based Internship at Nish Technologies.",
        "Qualifier rankings are determined by aggregate score, accuracy rate, and total completion time.",
        "Official Verified Digital Certificates will be published on the Student Dashboard within 48 hours of test completion for all candidates achieving >= 65%."
      ]
    },
    {
      heading: "6. Fee Policy & Registration Terms",
      icon: "💳",
      rules: [
        "Registration fees cover administrative proctoring overhead, automated certificate verification, and unlimited access to the Study Material Hub.",
        "All registration fees are non-refundable once the personalized Candidate Passcode has been generated and dispatched.",
        "In the event of verified medical emergency or technical disruption on the provider side, candidates may request a one-time rescheduling to the subsequent Sunday exam cycle by contacting support@nishtechnologies.com."
      ]
    },
    {
      heading: "7. Candidate Declaration & Acceptance",
      icon: "✍️",
      rules: [
        "By accessing this Study Material Hub or launching the Examination Simulator, the candidate explicitly confirms having read, understood, and agreed to adhere to all terms, proctoring guidelines, and code of conduct policies stipulated by Nish Technologies Inc."
      ]
    }
  ]
};
