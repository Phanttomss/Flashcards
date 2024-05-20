import { db } from "@/lib/db";

function GetUserByEmail(email: string) {
  const user = db.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export { GetUserByEmail }
