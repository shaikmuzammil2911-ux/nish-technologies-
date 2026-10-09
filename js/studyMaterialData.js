// NTI Comprehensive Study & Practice Preparation Material Hub - Nish Technologies Inc
// Massive 120+ Aptitude & Logical Reasoning Q&A Bank + In-Depth Domain Modules with Step-by-Step Explanations
// Unlocked exclusively via Candidate Security Passcode

export const APTITUDE_STUDY_MODULES = [
  {
    topic: "Quantitative Aptitude: Speed, Time & Distance (Trains & Boats)",
    icon: "🚆",
    summary: "Speed conversions, relative speed mechanics for objects moving in the same/opposite directions, train-platform crossings, and river stream currents (Upstream/Downstream).",
    keyFormulas: [
      "Speed = Distance / Time",
      "Conversion: 1 km/h = 5/18 m/s | 1 m/s = 18/5 km/h",
      "Relative Speed (Opposite Direction) = S1 + S2",
      "Relative Speed (Same Direction) = |S1 - S2|",
      "Train crossing platform/bridge: Total Distance = Length(Train) + Length(Platform)",
      "Downstream Speed = u + v | Upstream Speed = u - v (where u = speed in still water, v = stream speed)"
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
        question: "A boat travels 24 km downstream in 2 hours and 16 km upstream in 4 hours. What is the speed of the boat in still water?",
        options: ["8 km/h", "6 km/h", "10 km/h", "4 km/h"],
        correctAnswer: "8 km/h",
        explanation: "1. Downstream speed D = 24 / 2 = 12 km/h.\n2. Upstream speed U = 16 / 4 = 4 km/h.\n3. Speed in still water = (D + U) / 2 = (12 + 4) / 2 = 8 km/h."
      },
      {
        question: "A cyclist travels from point A to B at 20 km/h and returns at 30 km/h. What is the average speed for the entire journey?",
        options: ["24 km/h", "25 km/h", "26 km/h", "22.5 km/h"],
        correctAnswer: "24 km/h",
        explanation: "For equal distances, Average Speed = (2 × S1 × S2) / (S1 + S2) = (2 × 20 × 30) / (20 + 30) = 1200 / 50 = 24 km/h."
      },
      {
        question: "A person walking at 5 km/h crosses a bridge in 15 minutes. What is the length of the bridge in meters?",
        options: ["1250 meters", "1000 meters", "1500 meters", "750 meters"],
        correctAnswer: "1250 meters",
        explanation: "1. Time in hours = 15 / 60 = 0.25 hours.\n2. Distance = 5 km/h × 0.25 h = 1.25 km.\n3. Convert to meters: 1.25 × 1000 = 1250 meters."
      },
      {
        question: "Two cars start from the same place in opposite directions at 45 km/h and 55 km/h. After how many hours will they be 300 km apart?",
        options: ["3 hours", "2.5 hours", "3.5 hours", "4 hours"],
        correctAnswer: "3 hours",
        explanation: "1. Relative speed in opposite directions = 45 + 55 = 100 km/h.\n2. Time required = Distance / Relative Speed = 300 / 100 = 3 hours."
      },
      {
        question: "A train 150 meters long passes a telegraph post in 9 seconds. Find the speed of the train in km/h.",
        options: ["60 km/h", "54 km/h", "72 km/h", "48 km/h"],
        correctAnswer: "60 km/h",
        explanation: "1. Speed in m/s = Distance / Time = 150 / 9 = 50/3 m/s.\n2. Convert to km/h: (50/3) × (18/5) = 10 × 6 = 60 km/h."
      },
      {
        question: "A car covers a distance of 480 km in 8 hours. If it covers half of the journey in 3/5 of the total time, what must be its speed for the remaining half?",
        options: ["75 km/h", "60 km/h", "80 km/h", "70 km/h"],
        correctAnswer: "75 km/h",
        explanation: "1. Total distance = 480 km. Half distance = 240 km.\n2. First half time = (3/5) × 8 = 4.8 hours.\n3. Remaining time = 8 - 4.8 = 3.2 hours.\n4. Required speed = 240 / 3.2 = 75 km/h."
      },
      {
        question: "Walking at 3/4 of his normal speed, an employee is 20 minutes late to the office. What is his usual time to reach the office?",
        options: ["60 minutes", "45 minutes", "80 minutes", "50 minutes"],
        correctAnswer: "60 minutes",
        explanation: "1. Speed ratio = 3/4 -> Time ratio = 4/3 of normal time T.\n2. Extra time = (4/3)T - T = T/3 = 20 minutes.\n3. Normal time T = 20 × 3 = 60 minutes."
      },
      {
        question: "A motorboat whose speed is 15 km/h in still water goes 30 km downstream and comes back in 4 hours 30 minutes. What is the speed of the stream?",
        options: ["5 km/h", "4 km/h", "3 km/h", "6 km/h"],
        correctAnswer: "5 km/h",
        explanation: "1. 30/(15 + v) + 30/(15 - v) = 4.5.\n2. 30 × [ (15-v + 15+v) / (225 - v²) ] = 4.5 -> 30 × 30 / (225 - v²) = 4.5.\n3. 900 / 4.5 = 200 = 225 - v² -> v² = 25 -> v = 5 km/h."
      },
      {
        question: "If a runner takes 40 seconds to run around a 400m circular track, how many complete laps will he complete in 12 minutes?",
        options: ["18 laps", "16 laps", "20 laps", "15 laps"],
        correctAnswer: "18 laps",
        explanation: "1. 12 minutes = 12 × 60 = 720 seconds.\n2. Number of laps = Total time / Time per lap = 720 / 40 = 18 laps."
      },
      {
        question: "A train running at 54 km/h takes 20 seconds to pass a tunnel 120m long. What is the length of the train?",
        options: ["180 meters", "150 meters", "200 meters", "160 meters"],
        correctAnswer: "180 meters",
        explanation: "1. Speed in m/s = 54 × (5/18) = 15 m/s.\n2. Total distance in 20s = 15 × 20 = 300 meters.\n3. Train length = 300 - 120 (tunnel) = 180 meters."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Time, Work, Wages & Pipes/Cisterns",
    icon: "⏱️",
    summary: "Unitary work method, reciprocal day rates, work equivalence formulas (M1×D1×H1/W1 = M2×D2×H2/W2), wage distribution according to work share, and inlet/outlet pipe calculations.",
    keyFormulas: [
      "1 day work = 1 / Total Days",
      "Combined rate: 1/A + 1/B = (A+B)/(A×B)",
      "Chain Rule: (M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2",
      "Wages are divided in the ratio of work done: Efficiency_A : Efficiency_B",
      "Net inlet/outlet rate: 1/Inlet - 1/Outlet"
    ],
    practiceQuestions: [
      {
        question: "Worker A completes a project in 12 days, and Worker B in 18 days. If they work together for 4 days, what fraction of work remains unfinished?",
        options: ["4/9", "5/9", "1/3", "2/5"],
        correctAnswer: "4/9",
        explanation: "1. Rate of A = 1/12, Rate of B = 1/18.\n2. Combined 1-day work = 1/12 + 1/18 = 5/36.\n3. In 4 days, work done = 4 × (5/36) = 20/36 = 5/9.\n4. Remaining unfinished work = 1 - 5/9 = 4/9."
      },
      {
        question: "A can do a piece of work in 10 days, B in 15 days, and C in 30 days. How many days will they take working together?",
        options: ["5 days", "6 days", "4 days", "7 days"],
        correctAnswer: "5 days",
        explanation: "1. Combined 1-day rate = 1/10 + 1/15 + 1/30 = (3 + 2 + 1)/30 = 6/30 = 1/5.\n2. Total time = 5 days."
      },
      {
        question: "Pipe A can fill a tank in 6 hours, while Pipe B empties it in 8 hours. If both pipes are opened together, in how many hours will the tank be full?",
        options: ["24 hours", "18 hours", "12 hours", "16 hours"],
        correctAnswer: "24 hours",
        explanation: "1. Net filling rate per hour = 1/6 - 1/8 = (4 - 3)/24 = 1/24.\n2. Total time to fill tank = 24 hours."
      },
      {
        question: "12 men can complete a construction task in 18 days working 8 hours a day. In how many days can 16 men complete it working 9 hours a day?",
        options: ["12 days", "14 days", "10 days", "15 days"],
        correctAnswer: "12 days",
        explanation: "Using M1×D1×H1 = M2×D2×H2:\n12 × 18 × 8 = 16 × D2 × 9\n1728 = 144 × D2 -> D2 = 1728 / 144 = 12 days."
      },
      {
        question: "A and B undertake a project for ₹6,000. A alone can do it in 6 days and B alone in 8 days. With the help of C, they finish it in 3 days. What is C's share of wages?",
        options: ["₹750", "₹1,000", "₹1,250", "₹500"],
        correctAnswer: "₹750",
        explanation: "1. In 3 days: A does 3/6 = 1/2 work (₹3,000). B does 3/8 work (₹2,250).\n2. C does remaining work = 1 - (1/2 + 3/8) = 1 - 7/8 = 1/8.\n3. C's share = (1/8) × ₹6,000 = ₹750."
      },
      {
        question: "A is twice as efficient as B. If together they finish a task in 14 days, in how many days can A alone finish the task?",
        options: ["21 days", "28 days", "35 days", "18 days"],
        correctAnswer: "21 days",
        explanation: "1. Let B's daily work = 1 unit -> A's daily work = 2 units.\n2. Together daily = 3 units. In 14 days, total work = 3 × 14 = 42 units.\n3. Days for A alone = 42 / 2 = 21 days."
      },
      {
        question: "Two pipes P and Q can fill a cistern in 12 and 15 minutes respectively. If both are opened and after 3 minutes P is closed, how much more time will Q take to fill the cistern?",
        options: ["8 minutes 15 seconds", "9 minutes", "7 minutes 30 seconds", "8 minutes"],
        correctAnswer: "8 minutes 15 seconds",
        explanation: "1. Work in first 3 mins = 3 × (1/12 + 1/15) = 3 × (9/60) = 27/60 = 9/20.\n2. Remaining work = 1 - 9/20 = 11/20.\n3. Time taken by Q = (11/20) / (1/15) = (11 × 15)/20 = 33/4 = 8.25 mins = 8 mins 15 secs."
      },
      {
        question: "A team of 8 workers can finish a task in 10 days. If 2 workers leave after 4 days, how many more days will the remaining workers take?",
        options: ["8 days", "7 days", "6 days", "9 days"],
        correctAnswer: "8 days",
        explanation: "1. Total man-days = 8 × 10 = 80.\n2. Work done in 4 days = 8 × 4 = 32 man-days.\n3. Remaining work = 80 - 32 = 48 man-days.\n4. Remaining workers = 6 -> Days = 48 / 6 = 8 days."
      },
      {
        question: "A can complete 1/3 of a work in 5 days, and B can complete 2/5 of the same work in 10 days. In how many days can both complete the work together?",
        options: ["9 3/8 days", "8 days", "10 days", "11 1/4 days"],
        correctAnswer: "9 3/8 days",
        explanation: "1. A finishes full work in 5 × 3 = 15 days.\n2. B finishes full work in 10 × (5/2) = 25 days.\n3. Together = (15 × 25) / (15 + 25) = 375 / 40 = 75/8 = 9 3/8 days."
      },
      {
        question: "Three pipes A, B, and C can fill a reservoir in 6 hours. After working together for 2 hours, C is closed and A and B fill the remaining part in 7 hours. How long would C alone take to fill the reservoir?",
        options: ["14 hours", "12 hours", "16 hours", "18 hours"],
        correctAnswer: "14 hours",
        explanation: "1. In 2 hours, A+B+C fill 2/6 = 1/3 reservoir. Remaining = 2/3.\n2. (A+B) fill 2/3 in 7 hours -> (A+B) 1-hour rate = (2/3)/7 = 2/21.\n3. C's 1-hour rate = (A+B+C rate) - (A+B rate) = 1/6 - 2/21 = (7 - 4)/42 = 3/42 = 1/14.\n4. C alone takes 14 hours."
      },
      {
        question: "Worker X is 50% more efficient than Worker Y. If Y alone completes a job in 30 days, in how many days will X complete the same job?",
        options: ["20 days", "15 days", "22.5 days", "18 days"],
        correctAnswer: "20 days",
        explanation: "1. Efficiency ratio X : Y = 1.5 : 1 = 3 : 2.\n2. Time ratio X : Y = 2 : 3.\n3. Since Y takes 30 days, X takes (2/3) × 30 = 20 days."
      },
      {
        question: "A cistern has a leak which would empty it in 8 hours. A tap is turned on which admits 6 liters a minute into the cistern, and it is now emptied in 12 hours. How many liters does the cistern hold?",
        options: ["8,640 liters", "7,200 liters", "9,600 liters", "6,400 liters"],
        correctAnswer: "8,640 liters",
        explanation: "1. Inlet tap 1-hour rate = 1/8 - 1/12 = (3 - 2)/24 = 1/24.\n2. Time for inlet tap alone to fill cistern = 24 hours.\n3. Inflow per hour = 6 liters/min × 60 = 360 liters/hour.\n4. Capacity = 24 × 360 = 8,640 liters."
      }
    ]
  },
  {
    topic: "Quantitative Aptitude: Percentages, Profit, Loss & Discount",
    icon: "📈",
    summary: "Percentage increments/decrements, Cost Price (CP), Selling Price (SP), Marked Price (MP), successive discounts, and margin analysis.",
    keyFormulas: [
      "Profit % = (SP - CP) / CP × 100%",
      "Loss % = (CP - SP) / CP × 100%",
      "SP = CP × (100 + Profit%) / 100",
      "Effective Successive Discount = d1 + d2 - (d1 × d2)/100",
      "If price increases by R%, consumption reduction = [R / (100 + R)] × 100%"
    ],
    practiceQuestions: [
      {
        question: "A tech hardware retailer sells a circuit board for ₹1,870 after giving a discount of 15% on marked price and still makes a 10% profit. What was the original cost price?",
        options: ["₹1,700", "₹1,650", "₹1,750", "₹1,600"],
        correctAnswer: "₹1,700",
        explanation: "1. Selling price SP = ₹1,870 with 10% profit.\n2. Cost Price CP = SP / (1 + 0.10) = 1870 / 1.10 = ₹1,700."
      },
      {
        question: "If a company's revenue increased by 25% in 2024 and then decreased by 20% in 2025, what is the net overall percentage change?",
        options: ["0% (No change)", "5% increase", "5% decrease", "2% increase"],
        correctAnswer: "0% (No change)",
        explanation: "1. Let initial value = 100.\n2. After +25%: 100 + 25 = 125.\n3. After -20%: 125 - (0.20 × 125) = 125 - 25 = 100.\n4. Net change = 0%."
      },
      {
        question: "Two successive discounts of 20% and 10% are equivalent to a single discount of:",
        options: ["28%", "30%", "25%", "27%"],
        correctAnswer: "28%",
        explanation: "Equivalent discount = d1 + d2 - (d1 × d2)/100 = 20 + 10 - (200/100) = 30 - 2 = 28%."
      },
      {
        question: "By selling an article for ₹720, a trader loses 10%. At what price should he sell it to gain 15%?",
        options: ["₹920", "₹900", "₹850", "₹950"],
        correctAnswer: "₹920",
        explanation: "1. CP = 720 / 0.90 = ₹800.\n2. Target SP for 15% gain = 800 × 1.15 = ₹920."
      },
      {
        question: "If the price of petrol increases by 25%, by what percentage must a motorist reduce consumption so expenditure remains unchanged?",
        options: ["20%", "25%", "15%", "16.67%"],
        correctAnswer: "20%",
        explanation: "Reduction % = [R / (100 + R)] × 100% = [25 / 125] × 100% = (1/5) × 100% = 20%."
      },
      {
        question: "A merchant marks his goods 40% above cost price and allows a discount of 25% on the marked price. What is his profit percentage?",
        options: ["5%", "10%", "15%", "8%"],
        correctAnswer: "5%",
        explanation: "1. Let CP = 100 -> MP = 140.\n2. Discount of 25% on 140 = 0.25 × 140 = 35.\n3. SP = 140 - 35 = 105.\n4. Profit % = 105 - 100 = 5%."
      },
      {
        question: "In an election between two candidates, the winner received 58% of valid votes and won by a majority of 3,200 votes. Find the total number of valid votes.",
        options: ["20,000", "25,000", "18,000", "24,000"],
        correctAnswer: "20,000",
        explanation: "1. Winner = 58%, Loser = 42%.\n2. Majority percentage = 58% - 42% = 16%.\n3. 16% of Total = 3,200 -> Total = (3,200 × 100) / 16 = 20,000 votes."
      },
      {
        question: "A dishonest dealer professes to sell his goods at cost price but uses a weight of 900 grams instead of 1 kilogram. What is his gain percentage?",
        options: ["11 1/9%", "10%", "12.5%", "9 1/11%"],
        correctAnswer: "11 1/9%",
        explanation: "Gain % = [Error / (True Value - Error)] × 100% = [100 / 900] × 100% = 100/9% = 11 1/9%."
      },
      {
        question: "If 15% of A equals 20% of B, what is the ratio of A to B?",
        options: ["4 : 3", "3 : 4", "5 : 4", "4 : 5"],
        correctAnswer: "4 : 3",
        explanation: "0.15 × A = 0.20 × B -> A / B = 0.20 / 0.15 = 20 / 15 = 4 / 3."
      },
      {
        question: "A laptop is bought for ₹45,000. Its value depreciates at 10% per annum. What will be its estimated value after 2 years?",
        options: ["₹36,450", "₹36,000", "₹37,500", "₹38,200"],
        correctAnswer: "₹36,450",
        explanation: "Value = 45000 × (1 - 0.10)² = 45000 × 0.81 = ₹36,450."
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
        explanation: "• First letter: A, B, C, D -> E\n• Number: 1², 2², 3², 4² -> 5² = 25\n• Third letter: Z, Y, X, W -> V\nCombined = E25V."
      },
      {
        question: "Which number replaces the question mark: 5 : 124 :: 7 : ?",
        options: ["342", "343", "340", "345"],
        correctAnswer: "342",
        explanation: "Pattern: n : (n³ - 1)\n• 5³ - 1 = 125 - 1 = 124\n• 7³ - 1 = 343 - 1 = 342."
      }
    ]
  },
  {
    topic: "Logical Reasoning: Coding-Decoding, Blood Relations & Seating",
    icon: "👥",
    summary: "Letter substitution rules, family tree relationship diagrams, clockwise circular seating arrangements, and linear ranking logic.",
    keyFormulas: [
      "Coding patterns: +k/-k shift, reverse order, opposite letter pairs (AZ, BY, CX...)",
      "Blood relations: Father's father = Grandfather, Mother's brother = Maternal Uncle, Son's wife = Daughter-in-law",
      "Circular seating facing center: Left is clockwise, Right is anti-clockwise"
    ],
    practiceQuestions: [
      {
        question: "If in a certain system code, 'SILICON' is encoded as 'TKOHFRQ', how is 'CIRCUIT' encoded under the same rule?",
        options: ["DLSEVKW", "DKTDVLW", "DKSEVJW", "DLSFWLX"],
        correctAnswer: "DLSEVKW",
        explanation: "Alternating letter shift (+1, +2):\nC(+1)=D, I(+2)=K, R(+1)=S, C(+2)=E, U(+1)=V, I(+2)=K, T(+1)=U... DLSEVKW."
      },
      {
        question: "Pointing to a photograph, a woman says: 'He is the son of the only son of my grandfather.' How is the person in the photograph related to the woman?",
        options: ["Brother", "Cousin", "Father", "Uncle"],
        correctAnswer: "Brother",
        explanation: "Grandfather's only son = Woman's father. The son of her father is her Brother."
      },
      {
        question: "Six people A, B, C, D, E, F are sitting in a circle facing the center. A is to the immediate left of B. E is opposite D. C is between A and D. Who is to the immediate right of B?",
        options: ["F", "E", "D", "C"],
        correctAnswer: "F",
        explanation: "Following circular coordinates: Placements yield sequence B, A, C, D, E, F. Thus, F is to the immediate right of B."
      },
      {
        question: "If 'ROSE' is coded as 6821, 'CHAIR' is coded as 73456, what is the code for 'SEARCH'?",
        options: ["214673", "214573", "214675", "213674"],
        correctAnswer: "214673",
        explanation: "Direct letter mapping:\nS=2, E=1, A=4, R=6, C=7, H=3 -> 214673."
      },
      {
        question: "Introducing a man, a woman says: 'His wife is the only daughter of my father.' How is the man related to the woman?",
        options: ["Husband", "Brother", "Father-in-law", "Maternal Uncle"],
        correctAnswer: "Husband",
        explanation: "The only daughter of the woman's father is the woman herself. Since his wife is the woman herself, the man is her Husband."
      },
      {
        question: "In a class of 45 students, Rahul's rank is 18th from the top. What is his rank from the bottom?",
        options: ["28th", "27th", "29th", "26th"],
        correctAnswer: "28th",
        explanation: "Rank from bottom = Total Students - Rank from top + 1 = 45 - 18 + 1 = 28th."
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
      }
    ]
  },
  {
    topic: "Data Interpretation & Analytical Reasoning",
    icon: "📊",
    summary: "Pie charts degree/percentage conversions, bar charts trends, multi-variable tables, and numerical data deductions.",
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
            q: 'Which metric measures the readability ease of an English editorial piece based on sentence length and syllable count?',
            ans: 'Flesch-Kincaid Reading Ease Score',
            detail: 'Scores between 60-70 indicate standard readable English accessible to broad digital web audiences without cognitive strain.'
          }
        ]
      },
      {
        title: 'Editorial Copywriting Frameworks: PAS, FAB & Storytelling',
        concepts: 'PAS (Problem, Agitation, Solution) creates urgency on sales pages. FAB (Features, Advantages, Benefits) connects technical product specs with emotional client value.',
        practice: [
          {
            q: 'Which formula focuses on highlighting user pain points before presenting the product solution?',
            ans: 'PAS (Problem, Agitation, Solution)',
            detail: 'PAS first identifies a specific friction point, gently agitates the emotional or financial cost of inaction, and concludes by positioning the product/service as the ultimate relief.'
          },
          {
            q: 'How does the inverted pyramid structure organize information in news and blog articles?',
            ans: 'Most critical info at the top, supporting details in the middle, background context at the end.',
            detail: 'The inverted pyramid ensures readers immediately grasp the main takeaway even if they only skim the opening section.'
          }
        ]
      }
    ]
  },
  'vlsi': {
    domainName: 'VLSI (Very Large Scale Integration)',
    category: 'Core Semiconductor',
    icon: '🔬',
    overview: 'VLSI engineering covers digital logic, RTL hardware modeling in Verilog/SystemVerilog, Static Timing Analysis (STA), clock domain crossing (CDC), FPGA prototyping, and ASIC physical design.',
    coreModules: [
      {
        title: 'Digital Electronics & CMOS Logic Design',
        concepts: 'Combinational vs Sequential logic, Setup & Hold time constraints, Clock domain crossing (CDC), Setup Slack = T_period - (T_cq + T_comb + T_setup), Hold Slack = T_cq + T_comb - T_hold.',
        practice: [
          {
            q: 'In digital synchronous circuit design, what condition causes a Setup Time violation?',
            ans: 'Data arrives too late before the active clock edge',
            detail: 'Setup time (T_setup) is the minimum time data must remain stable BEFORE the active clock edge. If combinational propagation delay is too long, setup time is violated, resulting in metastability.'
          },
          {
            q: 'Which Verilog block is used to synthesize sequential synchronous flip-flop registers?',
            ans: 'always @(posedge clk or negedge rst_n)',
            detail: 'Synchronous edge-triggered circuits require sensitivity lists specifying edge triggers (posedge or negedge). Non-blocking assignments (<=) are mandatory inside sequential always blocks.'
          },
          {
            q: 'Why are Dual-Flop Synchronizers employed in Clock Domain Crossing (CDC)?',
            ans: 'To minimize the probability of metastability entering the destination clock domain.',
            detail: 'Passing asynchronous signals through two back-to-back flip-flops exponentially reduces Mean Time Between Failures (MTBF).'
          }
        ]
      }
    ]
  },
  'ai-ml': {
    domainName: 'Artificial Intelligence & Machine Learning',
    category: 'AI & Data Science',
    icon: '🤖',
    overview: 'Covers Supervised/Unsupervised learning, Deep Learning neural networks, Transformers, Gradient Descent optimization, Regularization (L1/L2), and model evaluation metrics (Precision, Recall, F1, ROC-AUC).',
    coreModules: [
      {
        title: 'Machine Learning Model Optimization & Metrics',
        concepts: 'Bias-Variance tradeoff, Overfitting mitigation using Dropout and L2 weight decay, Loss functions (Cross-Entropy, MSE), Confusion Matrix analysis.',
        practice: [
          {
            q: 'When evaluating a medical diagnosis classifier with highly imbalanced class distribution (99% negative, 1% positive), which metric is most reliable?',
            ans: 'Precision-Recall F1-Score / PR-AUC',
            detail: 'Accuracy is misleading on imbalanced datasets because a trivial model predicting negative for all inputs achieves 99% accuracy while failing completely on true positive detection. F1-Score balances Precision and Recall.'
          },
          {
            q: 'What is the primary purpose of Dropout in deep neural network training?',
            ans: 'To prevent co-adaptation of feature detectors and reduce overfitting.',
            detail: 'During training, dropout randomly deactivates a fraction of neurons with probability p, forcing the network to learn robust redundant representations.'
          }
        ]
      }
    ]
  },
  'full-stack': {
    domainName: 'Full Stack Web Development',
    category: 'IT & Software',
    icon: '🌐',
    overview: 'Modern full stack architectures leveraging React/Next.js, Node.js/Express, REST/GraphQL APIs, SQL/NoSQL databases, asynchronous event loops, and cloud CI/CD pipelines.',
    coreModules: [
      {
        title: 'JavaScript Event Loop & Async Architecture',
        concepts: 'Call Stack, Microtask Queue (Promises, process.nextTick), Macrotask Queue (setTimeout, setInterval, I/O), Database indexing (B-Tree), JWT authentication flow.',
        practice: [
          {
            q: 'In the Node.js / Browser event loop, which queue has highest execution priority after synchronous code completes?',
            ans: 'Microtask Queue (Promise callbacks)',
            detail: 'Microtasks (Promises, queueMicrotask) are drained completely before the event loop advances to execute macrotasks (such as setTimeout or setImmediate).'
          },
          {
            q: 'What is the key benefit of React Virtual DOM reconciliation over direct DOM manipulation?',
            ans: 'Batched diffing calculates minimal DOM mutations, avoiding costly browser reflows and repaints.',
            detail: 'React creates an in-memory Virtual DOM tree, runs the reconciliation algorithm, and applies only the calculated diffs to the actual DOM in a single batch.'
          }
        ]
      }
    ]
  },
  'python': {
    domainName: 'Python Full Stack & Automation',
    category: 'IT & Software',
    icon: '🐍',
    overview: 'Core Python data structures (Lists, Dicts, Sets), Generators, Decorators, GIL (Global Interpreter Lock), Multiprocessing vs Multithreading, Django/FastAPI frameworks.',
    coreModules: [
      {
        title: 'Python Memory Management & Performance',
        concepts: 'CPython reference counting and generational garbage collection, List comprehensions vs Generators for O(1) memory iteration, GIL impacts on CPU-bound tasks.',
        practice: [
          {
            q: 'What is the primary memory advantage of using a Generator Expression over a List Comprehension in Python?',
            ans: 'Generators yield items lazily on demand without storing the full sequence in RAM',
            detail: 'Generators use lazy evaluation and maintain only the current state in memory (O(1) space complexity), making them ideal for streaming gigabyte-scale datasets.'
          },
          {
            q: 'How does Python Global Interpreter Lock (GIL) impact multithreading?',
            ans: 'It allows only one native thread to execute Python bytecode at a time, limiting CPU-bound speedup.',
            detail: 'For CPU-bound tasks, multiprocessing or C-extensions are required to utilize multiple CPU cores in parallel.'
          }
        ]
      }
    ]
  }
};

/**
 * Generates combined comprehensive study material for any domain
 */
export function getStudyMaterialForDomain(domainIdentifier) {
  const normKey = (domainIdentifier || '').toLowerCase().replace(/[^a-z0-9-]/g, '-');
  
  let domainGuide = DOMAIN_STUDY_GUIDES[normKey];
  if (!domainGuide) {
    const foundKey = Object.keys(DOMAIN_STUDY_GUIDES).find(k => normKey.includes(k) || k.includes(normKey));
    if (foundKey) {
      domainGuide = DOMAIN_STUDY_GUIDES[foundKey];
    } else {
      domainGuide = {
        domainName: domainIdentifier || 'Specialized Technical Domain',
        category: 'Technology & Engineering',
        icon: '⚡',
        overview: `Comprehensive syllabus and problem-solving practice for ${domainIdentifier}. Covers core domain architecture, industrial standard tooling, hands-on implementations, and qualifier examination strategies.`,
        coreModules: [
          {
            title: `${domainIdentifier} Technical Foundation & Principles`,
            concepts: `Foundational concepts, industry best practices, performance optimization, and real-world project deployment standards in ${domainIdentifier}.`,
            practice: [
              {
                q: `What is the primary objective of industry standards and automated testing pipelines in modern ${domainIdentifier}?`,
                ans: 'To guarantee system reliability, prevent regressions, and ensure scalable maintainability.',
                detail: 'Standardized workflows and automated test coverage allow teams to deliver high-quality production code with reduced error margins.'
              },
              {
                q: `How do professional practitioners in ${domainIdentifier} approach performance bottleneck diagnosis?`,
                ans: 'By conducting systematic benchmarking, profiling resource utilization, and optimizing critical execution paths.',
                detail: 'Profiling before optimizing ensures engineering effort is focused precisely where latency or memory overhead is highest.'
              }
            ]
          }
        ]
      };
    }
  }

  return {
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
