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

  // Create user
  const user = await prisma.user.create({
    data: {
      name: "John",
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
      {
        userId: user.id,
        sportId: football.id,
      },
      {
        userId: user.id,
        sportId: basketball.id,
      },
    ],
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
