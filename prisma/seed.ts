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
    { name: "Push-Up", category: "Bodyweight", with_out_equipment: true },
    { name: "Pull-Up", category: "Bodyweight", with_out_equipment: true },
    { name: "Bench Press", category: "Strength", with_out_equipment: false },
    { name: "Deadlift", category: "Strength", with_out_equipment: false },
    { name: "Squat", category: "Strength", with_out_equipment: false },
    { name: "Overhead Press", category: "Strength", with_out_equipment: false },
    { name: "Bicep Curl", category: "Strength", with_out_equipment: false },
    {
      name: "Tricep Extension",
      category: "Strength",
      with_out_equipment: false,
    },
    { name: "Lunges", category: "Bodyweight", with_out_equipment: true },
    { name: "Plank", category: "Core", with_out_equipment: true },
    { name: "Mountain Climbers", category: "Cardio", with_out_equipment: true },
    { name: "Jumping Jacks", category: "Cardio", with_out_equipment: true },
    { name: "Burpees", category: "Cardio", with_out_equipment: true },
    { name: "Russian Twists", category: "Core", with_out_equipment: true },
    { name: "Leg Raises", category: "Core", with_out_equipment: true },
    { name: "Cable Row", category: "Strength", with_out_equipment: false },
    { name: "Incline Press", category: "Strength", with_out_equipment: false },
    { name: "Dumbbell Fly", category: "Strength", with_out_equipment: false },
    { name: "Front Squat", category: "Strength", with_out_equipment: false },
    { name: "Calf Raise", category: "Strength", with_out_equipment: false },
    { name: "Lat Pulldown", category: "Strength", with_out_equipment: false },
    { name: "Leg Press", category: "Strength", with_out_equipment: false },
    { name: "Chest Dip", category: "Bodyweight", with_out_equipment: true },
    { name: "Hip Thrust", category: "Strength", with_out_equipment: false },
    { name: "Hammer Curl", category: "Strength", with_out_equipment: false },
  ].map((exercise) => ({
    ...exercise,
    description: `${exercise.name} exercise description`,
  }));

  await prisma.exercise.createMany({
    data: exercises,
    skipDuplicates: true,
  });

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
