// NTI Comprehensive Study & Practice Preparation Material Hub - Nish Technologies Inc
// Massive 130+ High-Yield Aptitude & Logical Reasoning Q&As + Extensive Domain Technical Material with Detailed Step-by-Step Explanations
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
  'content-writing': {
    domainName: 'Content Writing & Copywriting',
    category: 'Creative & Digital Media',
    icon: '✍️',
    overview: 'Content Writing combines audience psychology, narrative structuring, SEO algorithms, and persuasive copywriting frameworks to build high-converting editorial campaigns.',
    coreModules: [
      {
        title: 'SEO Writing, Search Intent & Keyword Optimization',
        concepts: 'Understanding 4 search intents (Informational, Navigational, Commercial, Transactional). Meta optimization (Title <60 chars, Meta Description <160 chars), H1-H4 structural tagging, LSI keyword distribution (1-2% density), and voice search readability.',
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
          },
          {
            q: 'What role do Latent Semantic Indexing (LSI) keywords play in modern SEO content creation?',
            ans: 'They provide thematic context to search crawlers without repeating primary keywords.',
            detail: 'LSI keywords are semantically related terms (e.g. for "car loan", LSI includes "interest rate", "EMI calculator", "down payment") helping search algorithms understand article depth.'
          }
        ]
      },
      {
        title: 'Editorial Standards, Readability & Tone Adaptation',
        concepts: 'Flesch-Kincaid grade level tuning, active vs passive voice ratio (>80% active), tone of voice matrices (B2B corporate vs B2C casual), plagiarism prevention, and fact-checking methodology.',
        practice: [
          {
            q: 'What Flesch-Kincaid Reading Ease score range is ideal for mainstream public web audiences?',
            ans: '60 to 70 (Grade 7–8 reading level)',
            detail: 'Scores between 60–70 ensure smooth comprehension for general web users, keeping bounce rates low and dwell time high.'
          },
          {
            q: 'Why should editorial content prioritize active voice over passive voice?',
            ans: 'Active voice is clearer, more concise, direct, and engaging for modern digital readers.',
            detail: 'Active voice specifies the doer of the action upfront, reducing wordiness and eliminating ambiguous sentence structures.'
          },
          {
            q: 'What is the purpose of a Brand Style Guide in multi-author editorial teams?',
            ans: 'To maintain consistent voice, capitalization, formatting, punctuation, and terminology across all publishing channels.',
            detail: 'Style guides ensure that regardless of which copywriter writes a piece, the brand sounds unified, professional, and authentic.'
          }
        ]
      }
    ]
  },
  'vlsi': {
    domainName: 'VLSI & Chip Design (Semiconductor Engineering)',
    category: 'Hardware & Electronics Engineering',
    icon: '⚡',
    overview: 'VLSI encompasses front-end digital design (Verilog/SystemVerilog, RTL synthesis, FSMs) and back-end physical design (floorplanning, clock tree synthesis, Static Timing Analysis STA, DRC/LVS).',
    coreModules: [
      {
        title: 'Digital Logic, Verilog RTL & State Machine Modeling',
        concepts: 'Combinational vs sequential logic, blocking (=) vs non-blocking (<=) assignments, Mealy vs Moore state machines, setup time ($t_{su}$), hold time ($t_h$), clock-to-q delay ($t_{cq}$), and metastable states.',
        practice: [
          {
            q: 'Why are non-blocking assignments (<=) strictly mandatory for sequential always blocks in Verilog?',
            ans: 'To prevent race conditions and ensure all registers update concurrently at the clock edge.',
            detail: 'Blocking assignments (=) execute sequentially, creating simulation synthesis mismatches and clock skew race hazards in hardware flip-flop registers.'
          },
          {
            q: 'What is Setup Time ($t_{su}$) in sequential flip-flop timing?',
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
        concepts: 'Setup/Hold slack calculations ($Slack = Required - Arrival$), Clock Tree Synthesis (CTS), skew and jitter budgeting, DRC (Design Rule Checking), LVS (Layout Versus Schematic), and FinFET scaling.',
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
          }
        ]
      }
    ]
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
        practice: [
          {
            q: 'How does L1 Regularization (Lasso) differ fundamentally from L2 Regularization (Ridge)?',
            ans: 'L1 drives feature weights to absolute zero (feature selection); L2 shrinks weights close to zero without zeroing them out.',
            detail: 'L1 adds the sum of absolute coefficients ($|w|$) to the cost function, creating sparse models. L2 adds squared magnitudes ($w^2$), preventing any single weight from dominating.'
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
        practice: [
          {
            q: 'What is the primary function of Batch Normalization in deep convolutional neural networks?',
            ans: 'It stabilizes and accelerates training by normalizing layer inputs to zero mean and unit variance.',
            detail: 'Batch Normalization reduces internal covariate shift, allowing higher learning rates and acting as a mild regularizer.'
          },
          {
            q: 'What is the difference between Data Drift and Concept Drift in production ML systems?',
            ans: 'Data Drift is a shift in input feature distribution $P(X)$; Concept Drift is a change in the underlying statistical relationship between features and target $P(Y|X)$.',
            detail: 'Both drifts degrade production inference accuracy over time, requiring continuous telemetry and automated retraining pipelines.'
          }
        ]
      }
    ]
  },
  'full-stack': {
    domainName: 'Full Stack Web Development',
    category: 'Software Engineering & Cloud Architecture',
    icon: '💻',
    overview: 'Full Stack encompasses client-side architecture (HTML5/CSS3/JavaScript/React), backend microservices (Node.js/Express, REST, GraphQL), database normalization (SQL & NoSQL), and CI/CD security.',
    coreModules: [
      {
        title: 'Frontend Architecture, React Internals & Modern JavaScript',
        concepts: 'Virtual DOM diffing algorithm, React Fiber, hooks (`useEffect`, `useMemo`, `useCallback`), closures, event bubbling/delegation, asynchronous event loops (Microtasks vs Macrotasks), and CSS Grid/Flexbox layouts.',
        practice: [
          {
            q: 'What is the fundamental difference between the JavaScript Microtask Queue and Macrotask (Callback) Queue?',
            ans: 'Microtasks (Promises, queueMicrotask) execute immediately after the current synchronous script, before any Macrotasks (setTimeout, setInterval).',
            detail: 'The browser event loop processes all pending microtasks to completion before moving to the next macrotask or rendering frame.'
          },
          {
            q: 'When should `useCallback` or `useMemo` be employed in a React component?',
            ans: 'To memoize expensive computations or prevent unnecessary child re-renders when passing functions/objects as props to memoized components.',
            detail: 'Overusing `useMemo` for trivial calculations introduces unnecessary memory overhead; it is best reserved for heavy data filtering or stable prop reference equality.'
          },
          {
            q: 'What is Cross-Origin Resource Sharing (CORS) and why does the browser enforce it?',
            ans: 'A browser security mechanism that restricts web applications from requesting resources from a different origin unless explicit HTTP headers allow it.',
            detail: 'CORS prevents malicious scripts on one website from reading sensitive authenticated data from another domain on behalf of the user.'
          },
          {
            q: 'How does indexing in SQL databases (B-Tree) accelerate query execution performance?',
            ans: 'It reduces lookup time complexity from $O(N)$ full table scan to $O(\\log N)$ balanced tree traversal.',
            detail: 'Indexes store ordered pointers to table rows. While they vastly speed up SELECT queries, they incur a slight write penalty on INSERT, UPDATE, and DELETE operations.'
          }
        ]
      },
      {
        title: 'Backend API Design, Authentication & System Scalability',
        concepts: 'JWT token signing vs session cookies, OAuth 2.0 flows, SQL ACID guarantees vs NoSQL BASE, Redis caching strategies (Cache-Aside, Write-Through), and horizontal scaling with load balancers.',
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
    ]
  },
  'python': {
    domainName: 'Python Programming & Backend Systems',
    category: 'Programming Languages & Systems',
    icon: '🐍',
    overview: 'Python systems programming, memory management (CPython reference counting & GC), GIL mechanics, decorators, generators, asynchronous concurrency (asyncio), and data engineering.',
    coreModules: [
      {
        title: 'Advanced Python Internals, Concurrency & Memory Model',
        concepts: 'CPython Global Interpreter Lock (GIL), GIL implications for multi-threading vs multi-processing, memory management (arena allocator, cyclic garbage collection), `*args`/`**kwargs`, decorators, context managers (`__enter__`, `__exit__`), and generator memory efficiency.',
        practice: [
          {
            q: 'What is the Global Interpreter Lock (GIL) in CPython and what is its primary effect on CPU-bound multi-threaded programs?',
            ans: 'A mutex that prevents multiple native threads from executing Python bytecodes simultaneously, restricting CPU-bound tasks to a single core.',
            detail: 'To achieve true multi-core CPU parallelism in Python, developers use the `multiprocessing` module or native C/Rust extensions rather than `threading`.'
          },
          {
            q: 'How do Python generator functions (`yield`) optimize memory consumption compared to standard list returns?',
            ans: 'Generators produce values on-demand one by one (lazy evaluation) without allocating the entire dataset in memory.',
            detail: 'Streaming a 10GB log file with a generator consumes negligible memory (a few kilobytes) instead of exhausting system RAM.'
          },
          {
            q: 'What is the primary difference between a Python `shallow copy` and a `deep copy`?',
            ans: 'Shallow copy duplicates the outer object while referencing inner nested objects; Deep copy recursively duplicates all nested objects.',
            detail: 'Mutating a nested list inside a shallow copy inadvertently mutates the original object, whereas a deep copy ensures complete isolation.'
          },
          {
            q: 'How does Python\'s `asyncio` event loop achieve high I/O concurrency on a single thread?',
            ans: 'By using non-blocking OS socket multiplexing (epoll/kqueue) and cooperative multitasking with coroutines (`async`/`await`).',
            detail: 'When a coroutine awaits an I/O operation (database query or network fetch), the event loop immediately switches execution to other pending tasks.'
          }
        ]
      }
    ]
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
        ]
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
    aptitudeModules: APTITUDE_STUDY_MODULES,
    domainGuide: domainGuide,
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
