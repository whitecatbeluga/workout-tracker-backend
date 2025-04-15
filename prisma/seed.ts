import prisma from "../src/utils/prisma";

async function main() {
  // Create sports
  const football = await prisma.userSports.create({
    data: {
      sportId: 1,
      sport_name: "Football",
    },
  });

  const basketball = await prisma.userSports.create({
    data: {
      sportId: 2,
      sport_name: "Basketball",
    },
  });

  const userExist = await prisma.user.findFirst({
    where: {
      email: "john@example.com",
    },
  });

  if (!userExist) {
    // Create user
    const user = await prisma.user.create({
      data: {
        first_name: "John",
        last_name: "Doe",
        address: "123 Main St",
        user_name: "john_doe",
        email: "john@example.com",
        password: "hashedpassword",
        gender: "male",
        age: 25,
        height: 178.2,
        weight: 70,
        bmi: 22.9,
        activity_level: 3,
        user_type: "regular",
      },
    });
    // Create user-sport pivot relationships
    await prisma.userSportPivot.createMany({
      data: [
        { userId: user.id, sportId: football.id },
        { userId: user.id, sportId: basketball.id },
      ],
    });
  }

  const exercises = [
    { name: "21s Bicep Curl", category: "Biceps", with_out_equipment: false },
    { name: "Ab Scissors", category: "Abdominals", with_out_equipment: true },
    { name: "Ab Wheel", category: "Abdominals", with_out_equipment: false },
    { name: "Aerobics", category: "Cardio", with_out_equipment: true },
    { name: "Air Bike", category: "Cardio", with_out_equipment: false },
    {
      name: "Arnold Press (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Around The World", category: "Chest", with_out_equipment: false },
    {
      name: "Assisted Pistol Squats",
      category: "Quadriceps",
      with_out_equipment: true,
    },
    {
      name: "Back Extension (Hyperextension)",
      category: "Lower Back",
      with_out_equipment: false,
    },
    {
      name: "Back Extension (Machine)",
      category: "Lower Back",
      with_out_equipment: false,
    },
    {
      name: "Back Extension (Weighted Hyperextension)",
      category: "Lower Back",
      with_out_equipment: false,
    },
    { name: "Ball Slams", category: "Full Body", with_out_equipment: false },
    {
      name: "Band Pullaparts",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Battle Ropes", category: "Cardio", with_out_equipment: false },
    {
      name: "Behind the Back Bicep Wrist Curl (Barbell)",
      category: "Forearms",
      with_out_equipment: false,
    },
    { name: "Bench Dip", category: "Triceps", with_out_equipment: false },
    {
      name: "Bench Press - Close Grip (Barbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Bench Press - Wide Grip (Barbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Bench Press (Barbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Bench Press (Cable)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Bench Press (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Bench Press (Smith Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Bent Over Row (Band)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Bent Over Row (Barbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Bent Over Row (Dumbbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Bicep Curl (Barbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Bicep Curl (Cable)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Bicep Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Bicep Curl (Machine)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Bicep Curl (Suspension) ",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Bicycle Crunch",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Bicycle Crunch Raised Legs",
      category: "Abdominals",
      with_out_equipment: true,
    },
    { name: "Bird Dog ", category: "Glutes", with_out_equipment: true },
    { name: "Box Jump", category: "Quadriceps", with_out_equipment: false },
    {
      name: "Box Squat (Barbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Boxing", category: "Cardio", with_out_equipment: true },
    {
      name: "Bulgarian Split Squat",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Burpee", category: "Full Body", with_out_equipment: true },
    {
      name: "Burpee Over the Bar",
      category: "Full Body",
      with_out_equipment: true,
    },
    {
      name: "Butterfly (Pec Deck)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Cable Core Palloff Press",
      category: "Abdominals",
      with_out_equipment: false,
    },
    { name: "Cable Crunch", category: "Abdominals", with_out_equipment: false },
    {
      name: "Cable Fly Crossovers",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Cable Pull Through",
      category: "Glutes",
      with_out_equipment: false,
    },
    {
      name: "Cable Twist (Down to up)",
      category: "Abdominals",
      with_out_equipment: false,
    },
    {
      name: "Cable Twist (Up to down)",
      category: "Abdominals",
      with_out_equipment: false,
    },
    {
      name: "Calf Extension (Machine)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Calf Press (Machine)",
      category: "Calves",
      with_out_equipment: false,
    },
    { name: "Chest Dip", category: "Chest", with_out_equipment: false },
    {
      name: "Chest Dip (Assisted)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Chest Dip (Weighted)",
      category: "Chest",
      with_out_equipment: false,
    },
    { name: "Chest Fly (Band)", category: "Chest", with_out_equipment: false },
    {
      name: "Chest Fly (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Chest Fly (Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Chest Fly (Suspension)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Chest Press (Band)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Chest Press (Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Chest Supported Incline Row (Dumbbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Chest Supported Reverse Fly (Dumbbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Chest Supported Y Raise (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Chin Up", category: "Lats", with_out_equipment: false },
    { name: "Chin Up (Assisted)", category: "Lats", with_out_equipment: false },
    { name: "Chin Up (Weighted)", category: "Lats", with_out_equipment: false },
    { name: "Clamshell", category: "Glutes", with_out_equipment: false },
    { name: "Clap Push Ups", category: "Chest", with_out_equipment: true },
    { name: "Clean", category: "Full Body", with_out_equipment: false },
    {
      name: "Clean and Jerk",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Clean and Press",
      category: "Full Body",
      with_out_equipment: false,
    },
    { name: "Clean Pull", category: "Full Body", with_out_equipment: false },
    { name: "Climbing", category: "Cardio", with_out_equipment: true },
    {
      name: "Concentration Curl",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Cross Body Hammer Curl",
      category: "Biceps",
      with_out_equipment: false,
    },
    { name: "Crunch", category: "Abdominals", with_out_equipment: true },
    {
      name: "Crunch (Machine)",
      category: "Abdominals",
      with_out_equipment: false,
    },
    {
      name: "Crunch (Weighted)",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Curtsy Lunge (Dumbbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Cycling", category: "Cardio", with_out_equipment: false },
    { name: "Dead Bug ", category: "Abdominals", with_out_equipment: true },
    { name: "Dead Hang", category: "Upper Back", with_out_equipment: true },
    {
      name: "Deadlift (Band)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Deadlift (Barbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Deadlift (Dumbbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Deadlift (Smith Machine)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Deadlift (Trap Bar)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Deadlift High Pull",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Decline Bench Press (Barbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Decline Bench Press (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Decline Bench Press (Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Decline Bench Press (Smith Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Decline Chest Fly (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Decline Crunch",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Decline Crunch (Weighted)",
      category: "Abdominals",
      with_out_equipment: true,
    },
    { name: "Decline Push Up", category: "Chest", with_out_equipment: false },
    { name: "Diamond Push Up", category: "Triceps", with_out_equipment: true },
    { name: "Downward Dog", category: "Full Body", with_out_equipment: true },
    { name: "Drag Curl", category: "Biceps", with_out_equipment: false },
    { name: "Dragon Flag", category: "Abdominals", with_out_equipment: true },
    { name: "Dragonfly", category: "Abdominals", with_out_equipment: true },
    { name: "Dumbbell Row", category: "Upper Back", with_out_equipment: false },
    {
      name: "Dumbbell Snatch",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Dumbbell Squeeze Press",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Dumbbell Step Up",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Elbow to Knee", category: "Abdominals", with_out_equipment: true },
    {
      name: "Elliptical Trainer",
      category: "Cardio",
      with_out_equipment: false,
    },
    {
      name: "EZ Bar Biceps Curl",
      category: "Biceps",
      with_out_equipment: false,
    },
    { name: "Face Pull", category: "Shoulders", with_out_equipment: false },
    { name: "Farmers Work", category: "Full Body", with_out_equipment: false },
    { name: "Fire Hydrants", category: "Glutes", with_out_equipment: true },
    {
      name: "Floor Press (Barbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Floor Press (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Floor Triceps Dip",
      category: "Triceps",
      with_out_equipment: true,
    },
    { name: "Flutter Kicks", category: "Abdominals", with_out_equipment: true },
    { name: "Frog Jumps", category: "Full Body", with_out_equipment: true },
    {
      name: "Frog Pumps (Dumbbell)",
      category: "Glutes",
      with_out_equipment: false,
    },
    {
      name: "Front Lever Hold",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Front Lever Raise",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Front Raise (Band)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Front Raise (Barbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Front Raise (Cable)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Front Raise (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Front Raise (Suspension)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Front Squat", category: "Quadriceps", with_out_equipment: false },
    { name: "Full Squat", category: "Quadriceps", with_out_equipment: false },
    { name: "Glute Bridge", category: "Glutes", with_out_equipment: true },
    {
      name: "Glute Ham Raise",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Glute Kickback (Machine)",
      category: "Glutes",
      with_out_equipment: false,
    },
    {
      name: "Glute Kickback on Floor",
      category: "Glutes",
      with_out_equipment: true,
    },
    { name: "Goblet Squat", category: "Quadriceps", with_out_equipment: false },
    {
      name: "Good Morning (Barbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Gorilla Row (Kettlebell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    { name: "Hack Squat", category: "Quadriceps", with_out_equipment: false },
    {
      name: "Hack Squat (Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Hammer Curl (Band)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Hammer Curl (Cable)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Hammer Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    { name: "Handstand Hold", category: "Full Body", with_out_equipment: true },
    {
      name: "Handstand Push Up",
      category: "Shoulders",
      with_out_equipment: true,
    },
    { name: "Hang Clean", category: "Full Body", with_out_equipment: false },
    { name: "Hang Snatch", category: "Full Body", with_out_equipment: false },
    {
      name: "Hanging Knee Raise",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Hanging Leg Raise",
      category: "Abdominals",
      with_out_equipment: true,
    },
    { name: "Heel Taps", category: "Abdominals", with_out_equipment: true },
    {
      name: "Hex Press (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "High Knee Skips",
      category: "Quadriceps",
      with_out_equipment: true,
    },
    { name: "High Knees", category: "Glutes", with_out_equipment: true },
    { name: "HIIT", category: "Cardio", with_out_equipment: true },
    { name: "Hiking", category: "Cardio", with_out_equipment: true },
    {
      name: "Hip Abduction (Machine)",
      category: "Abductors",
      with_out_equipment: false,
    },
    {
      name: "Hip Adduction (Machine)",
      category: "Adductors",
      with_out_equipment: false,
    },
    { name: "Hip Thrust", category: "Glutes", with_out_equipment: true },
    {
      name: "Hip Thrust (Barbell)",
      category: "Glutes",
      with_out_equipment: false,
    },
    {
      name: "Hip Thrust (Machine)",
      category: "Glutes",
      with_out_equipment: false,
    },
    { name: "Hollow Rock", category: "Abdominals", with_out_equipment: true },
    {
      name: "Incline Bench Press (Barbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Incline Bench Press (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Incline Bench Press (Smith Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Incline Chest Fly (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Incline Chest Press (Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    { name: "Incline Push Ups", category: "Chest", with_out_equipment: true },
    { name: "Inverted Row", category: "Upper Back", with_out_equipment: false },
    {
      name: "Iso-Lateral Chest Press (Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Iso-Lateral High Row (Machine)",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Iso-Lateral Low Row",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Iso-Lateral Row (Machine)",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Jack Knife (Suspension)",
      category: "Abdominals",
      with_out_equipment: false,
    },
    {
      name: "Jackknife Sit Up",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "JM Press (Barbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    { name: "Jump Rope", category: "Cardio", with_out_equipment: false },
    { name: "Jump Shrug", category: "Full Body", with_out_equipment: false },
    { name: "Jump Squat", category: "Quadriceps", with_out_equipment: true },
    { name: "Jumping Jack", category: "Full Body", with_out_equipment: true },
    { name: "Jumping Lunge", category: "Quadriceps", with_out_equipment: true },
    {
      name: "Kettlebell Clean",
      category: "Full Body",
      with_out_equipment: false,
    },
    { name: "Kettlebell Curl", category: "Biceps", with_out_equipment: false },
    {
      name: "Kettlebell Goblet Squat",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Kettlebell High Pull",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Kettlebell Shoulder Press",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Kettlebell Snatch",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Kettlebell Swing",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Kettlebell Turkish Get Up",
      category: "Full Body",
      with_out_equipment: false,
    },
    { name: "Kipping Pull Up", category: "Lats", with_out_equipment: false },
    {
      name: "Knee Raise Parallel Bars",
      category: "Abdominals",
      with_out_equipment: false,
    },
    {
      name: "Kneeling Pulldown (Band)",
      category: "Lats",
      with_out_equipment: false,
    },
    { name: "Kneeling Push Up", category: "Chest", with_out_equipment: true },
    { name: "L-Sit Hold", category: "Abdominals", with_out_equipment: true },
    { name: "Landmine 180", category: "Abdominals", with_out_equipment: false },
    { name: "Landmine Row", category: "Upper Back", with_out_equipment: false },
    {
      name: "Landmine Squat and Press",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Lat Pulldown - Close Grip (Cable)",
      category: "Lats",
      with_out_equipment: false,
    },
    { name: "Lat Pulldown (Band", category: "Lats", with_out_equipment: false },
    {
      name: "Lat Pulldown (Cable)",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Lat Pulldown (Machine)",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Lateral Band Walks",
      category: "Glutes",
      with_out_equipment: false,
    },
    {
      name: "Lateral Box Jump",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Lateral Leg Raises",
      category: "Glutes",
      with_out_equipment: true,
    },
    { name: "Lateral Lunge", category: "Quadriceps", with_out_equipment: true },
    {
      name: "Lateral Raise (Band)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Lateral Raise (Cable)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Lateral Raise (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Lateral Raise (Machine)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Lateral Squat", category: "Quadriceps", with_out_equipment: true },
    {
      name: "Leg Extension (Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Leg Press (Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Leg Press Horizontal (Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Leg Raise Parallel Bars",
      category: "Abdominals",
      with_out_equipment: false,
    },
    {
      name: "Low Cable Fly Crossovers",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Low Row (Suspension)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    { name: "Lunge", category: "Quadriceps", with_out_equipment: true },
    {
      name: "Lunge (Barbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Lunge (Dumbbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Lying Knee Raise",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Lying Leg Curl (Machine)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Lying Leg Raise",
      category: "Abdominals",
      with_out_equipment: false,
    },
    { name: "Lying Neck Curls", category: "Neck", with_out_equipment: true },
    {
      name: "Lying Neck Curls (Weighted)",
      category: "Neck",
      with_out_equipment: false,
    },
    {
      name: "Lying Neck Extension",
      category: "Neck",
      with_out_equipment: true,
    },
    {
      name: "Lying Neck Extension (Weighted)",
      category: "Neck",
      with_out_equipment: false,
    },
    {
      name: "Meadows Rows (Barbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Mountain Climber",
      category: "Full Body",
      with_out_equipment: true,
    },
    { name: "Muscle Up", category: "Full Body", with_out_equipment: false },
    { name: "Negative Pull Up", category: "Lats", with_out_equipment: true },
    {
      name: "Nordic Hamstrings Curls",
      category: "Hamstrings",
      with_out_equipment: true,
    },
    {
      name: "Oblique Crunch",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "One Arm Push Up",
      category: "Full Body",
      with_out_equipment: true,
    },
    {
      name: "Overhead Curl (Cable)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Overhead Dumbbell Lunge",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Overhead Press (Barbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Overhead Press (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Overhead Press (Smith Machine)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Overhead Squat",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Pause Squat (Barbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Pendlay Row (Barbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Pendulum Squat (Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Pike Pushup", category: "Triceps", with_out_equipment: true },
    { name: "Pilates", category: "Full Body", with_out_equipment: true },
    {
      name: "Pinwheel Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    { name: "Pistol Squat", category: "Quadriceps", with_out_equipment: true },
    { name: "Plank", category: "Abdominals", with_out_equipment: true },
    { name: "Plank Pushup", category: "Chest", with_out_equipment: true },
    { name: "Plate Curl", category: "Biceps", with_out_equipment: false },
    {
      name: "Plate Front Raise",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Plate Press", category: "Chest", with_out_equipment: false },
    {
      name: "Plate Squeeze (Svend Press)",
      category: "Chest",
      with_out_equipment: false,
    },
    { name: "Power Clean", category: "Full Body", with_out_equipment: false },
    { name: "Power Snatch", category: "Full Body", with_out_equipment: false },
    {
      name: "Preacher Curl (Barbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Preacher Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Preacher Curl (Machine)",
      category: "Biceps",
      with_out_equipment: false,
    },
    { name: "Press Under", category: "Full Body", with_out_equipment: false },
    { name: "Pull Up", category: "Lats", with_out_equipment: false },
    { name: "Pull Up (Assisted)", category: "Lats", with_out_equipment: false },
    { name: "Pull Up (Band)", category: "Lats", with_out_equipment: false },
    { name: "Pull Up (Weighted)", category: "Lats", with_out_equipment: false },
    {
      name: "Pullover (Dumbbell)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Pullover (Machine)",
      category: "Chest",
      with_out_equipment: false,
    },
    { name: "Push Press", category: "Shoulders", with_out_equipment: false },
    { name: "Push Up", category: "Chest", with_out_equipment: true },
    {
      name: "Push Up - Close Grip",
      category: "Chest",
      with_out_equipment: true,
    },
    { name: "Push Up (Weighted)", category: "Chest", with_out_equipment: true },
    { name: "Rack Pull", category: "Lower Back", with_out_equipment: false },
    {
      name: "Rear Delt Reverse Fly",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Rear Delt Reverse Fly (Dumbbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Rear Delt Reverse Fly (Machine)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Renegade Row (Dumbbell)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Reverse Crunch",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Reverse Curl (Barbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Reverse Curl (Cable)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Reverse Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Reverse Fly Single Arm (Cable)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Reverse Grip Concentration Curl",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Reverse Grip Lat Pulldown (Cable)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Reverse Hyperextension",
      category: "Glutes",
      with_out_equipment: false,
    },
    { name: "Reverse Lunge", category: "Quadriceps", with_out_equipment: true },
    {
      name: "Reverse Lunge (Barbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Reverse Lunge (Dumbbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    { name: "Reverse Plank", category: "Abdominals", with_out_equipment: true },
    { name: "Ring Dips", category: "Triceps", with_out_equipment: true },
    {
      name: "Romanian Deadlift (Barbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Romanian Deadlift (Dumbbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    { name: "Rope Cable Curl", category: "Biceps", with_out_equipment: false },
    {
      name: "Rope Straight Arm Pulldown",
      category: "Lats",
      with_out_equipment: false,
    },
    { name: "Rowing Machine", category: "Cardio", with_out_equipment: false },
    { name: "Running", category: "Cardio", with_out_equipment: true },
    {
      name: "Russian Twist (Bodyweight)",
      category: "Abdominals",
      with_out_equipment: true,
    },
    {
      name: "Russian Twist (Weighted)",
      category: "Abdominals",
      with_out_equipment: false,
    },
    {
      name: "Scapular Pull Ups",
      category: "Upper Back",
      with_out_equipment: true,
    },
    {
      name: "Seated Cable Row - Bar Grip",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Seated Cable Row - Bar Wide Grip",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Seated Cable Row - V Grip (Cable)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Seated Calf Raise ",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Seated Chest Flys (Cable)",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Seated Dip Machine",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Seated Incline Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Seated Lateral Raise (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Seated Leg Curl (Machine)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Seated Overhead Press (Barbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Seated Overhead Press (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Seated Palms Up Wrist Curl",
      category: "Forearms",
      with_out_equipment: false,
    },
    {
      name: "Seated Row (Machine)",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Seated Shoulder Press (Machine)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Seated Triceps Press",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Seated Wrist Extension (Barbell)",
      category: "Forearms",
      with_out_equipment: false,
    },
    {
      name: "Shoulder Press (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Shoulder Press (Machine Plates)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Shoulder Taps", category: "Shoulders", with_out_equipment: true },
    { name: "Shrug (Barbell)", category: "Traps", with_out_equipment: false },
    { name: "Shrug (Cable)", category: "Traps", with_out_equipment: false },
    { name: "Shrug (Dumbbell)", category: "Traps", with_out_equipment: false },
    { name: "Shrug (Machine)", category: "Traps", with_out_equipment: false },
    {
      name: "Shrug (Smith Machine)",
      category: "Traps",
      with_out_equipment: false,
    },
    { name: "Side Bend", category: "Abdominals", with_out_equipment: true },
    {
      name: "Side Bend (Dumbbell)",
      category: "Abdominals",
      with_out_equipment: false,
    },
    { name: "Side Plank", category: "Abdominals", with_out_equipment: true },
    {
      name: "Single Arm Cable Crossover",
      category: "Chest",
      with_out_equipment: false,
    },
    {
      name: "Single Arm Cable Row",
      category: "Upper Back",
      with_out_equipment: false,
    },
    {
      name: "Single Arm Curl (Cable)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Single Arm Landmine Press (Barbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Single Arm Lat Pulldown",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Single Arm Lateral Raise (Cable)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Single Arm Tricep Extension (Dumbbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Single Arm Triceps Pushdown (Cable)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Extensions",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Glute Bridge",
      category: "Glutes",
      with_out_equipment: true,
    },
    {
      name: "Single Leg Hip Thrust",
      category: "Glutes",
      with_out_equipment: true,
    },
    {
      name: "Single Leg Hip Thrust (Dumbbell)",
      category: "Glutes",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Press (Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Romanian Deadlift (Barbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Romanian Deadlift (Dumbbell)",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Standing Calf Raise",
      category: "Calves",
      with_out_equipment: true,
    },
    {
      name: "Single Leg Standing Calf Raise (Barbell)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Standing Calf Raise (Dumbbell)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Single Leg Standing Calf Raise (Machine)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Sissy Squat (Weighted)",
      category: "Quadriceps",
      with_out_equipment: true,
    },
    { name: "Sit Up", category: "Abdominals", with_out_equipment: true },
    {
      name: "Sit Up (Weighted)",
      category: "Abdominals",
      with_out_equipment: true,
    },
    { name: "Skating", category: "Cardio", with_out_equipment: true },
    { name: "Skiing", category: "Cardio", with_out_equipment: true },
    {
      name: "Skullcrusher (Barbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Skullcrusher (Dumbbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    { name: "Sled Push", category: "Full Body", with_out_equipment: false },
    { name: "Snatch", category: "Full Body", with_out_equipment: false },
    { name: "Snowboarding", category: "Cardio", with_out_equipment: true },
    {
      name: "Spider Curl (Barbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    {
      name: "Spider Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
    { name: "Spiderman", category: "Abdominals", with_out_equipment: true },
    { name: "Spinning", category: "Cardio", with_out_equipment: false },
    { name: "Split Jerk", category: "Full Body", with_out_equipment: false },
    {
      name: "Split Squat (Dumbbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Sprints", category: "Cardio", with_out_equipment: true },
    { name: "Squat (Band)", category: "Quadriceps", with_out_equipment: false },
    {
      name: "Squat (Barbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Squat (Bodyweight)",
      category: "Quadriceps",
      with_out_equipment: true,
    },
    {
      name: "Squat (Dumbbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Squat (Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Squat (Smith Machine)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Squat (Suspension)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Squat Row", category: "Full Body", with_out_equipment: false },
    {
      name: "Stair Machine (Floors)",
      category: "Cardio",
      with_out_equipment: false,
    },
    {
      name: "Stair Machine (Steps)",
      category: "Cardio",
      with_out_equipment: false,
    },
    {
      name: "Standing Cable Glute Kickbacks",
      category: "Glutes",
      with_out_equipment: false,
    },
    {
      name: "Standing Calf Raise",
      category: "Calves",
      with_out_equipment: true,
    },
    {
      name: "Standing Calf Raise (Barbell)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Standing Calf Raise (Dumbbell)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Standing Calf Raise (Machine)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Standing Calf Raise (Smith)",
      category: "Calves",
      with_out_equipment: false,
    },
    {
      name: "Standing Leg Curls",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    {
      name: "Standing Military Press (Barbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "Step Up", category: "Quadriceps", with_out_equipment: false },
    {
      name: "Sternum Pull Up (Gironda)",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Straight Arm Lat Pulldown (Cable)",
      category: "Lats",
      with_out_equipment: false,
    },
    {
      name: "Straight Leg Deadlift",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    { name: "Stretching ", category: "Other", with_out_equipment: true },
    {
      name: "Sumo Deadlift",
      category: "Hamstrings",
      with_out_equipment: false,
    },
    { name: "Sumo Squat", category: "Quadriceps", with_out_equipment: true },
    {
      name: "Sumo Squat (Barbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Sumo Squat (Dumbbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Sumo Squat (Kettlebell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Superman", category: "Lower Back", with_out_equipment: true },
    { name: "Swimming", category: "Cardio", with_out_equipment: true },
    { name: "T Bar Row", category: "Upper Back", with_out_equipment: false },
    {
      name: "Thruster (Barbell)",
      category: "Full Body",
      with_out_equipment: false,
    },
    {
      name: "Thruster (Kettlebell)",
      category: "Full Body",
      with_out_equipment: false,
    },
    { name: "Toe Touch", category: "Abdominals", with_out_equipment: true },
    { name: "Toes to Bar", category: "Abdominals", with_out_equipment: true },
    {
      name: "Torso Rotation",
      category: "Abdominals",
      with_out_equipment: false,
    },
    { name: "Treadmill ", category: "Cardio", with_out_equipment: false },
    { name: "Triceps Dip", category: "Triceps", with_out_equipment: false },
    {
      name: "Triceps Dip (Assisted)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Dip (Weighted)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Extension (Barbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Extension (Cable)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Extension (Dumbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Extension (Machine)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Extension (Suspension)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Kickback (Cable)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Kickback(Dumbbell)",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Pressdown",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Pushdown",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Triceps Rope Pushdown",
      category: "Triceps",
      with_out_equipment: false,
    },
    {
      name: "Upright Row (Barbell)",
      category: "Traps",
      with_out_equipment: false,
    },
    {
      name: "Upright Row (Cable)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    {
      name: "Upright Row (Dumbbell)",
      category: "Shoulders",
      with_out_equipment: false,
    },
    { name: "V Up", category: "Abdominals", with_out_equipment: true },
    { name: "Walking", category: "Cardio", with_out_equipment: true },
    { name: "Walking Lunge", category: "Quadriceps", with_out_equipment: true },
    {
      name: "Walking Lunge (Dumbbell)",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    { name: "Wall Ball", category: "Full Body", with_out_equipment: false },
    { name: "Wall Sit", category: "Quadriceps", with_out_equipment: false },
    { name: "Warm Up", category: "Full Body", with_out_equipment: true },
    { name: "Wide Pull Up", category: "Lats", with_out_equipment: false },
    { name: "Wrist Roller", category: "Forearms", with_out_equipment: false },
    { name: "Yoga", category: "Full Body", with_out_equipment: true },
    {
      name: "Zercher Squat",
      category: "Quadriceps",
      with_out_equipment: false,
    },
    {
      name: "Zottman Curl (Dumbbell)",
      category: "Biceps",
      with_out_equipment: false,
    },
  ].map((exercise) => ({
    ...exercise,
    description: `${exercise.name} exercise description`,
  }));

  // Reset the auto increment back to default 0-1
  // Optional: Disable safe updates temporarily (though usually not needed in Prisma)
  // await prisma.$executeRawUnsafe(`SET SQL_SAFE_UPDATES = 0`);

  // // Delete all records
  // await prisma.exercise.deleteMany();

  // // Reset AUTO_INCREMENT to 1
  // await prisma.$executeRawUnsafe(`ALTER TABLE Exercise AUTO_INCREMENT = 1`);

  // // Optional: Re-enable safe updates
  // await prisma.$executeRawUnsafe(`SET SQL_SAFE_UPDATES = 1`);

  const exerciseExists = prisma.exercise.findFirst({});
  if (!exerciseExists) {
    await prisma.exercise.createMany({
      data: exercises,
      skipDuplicates: true,
    });
  }

  console.log("✅ Seed data inserted!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
