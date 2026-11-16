let userData = {}

export async function submitUserData(name, age, email) {
    if (!name || !age || !email) {
        throw new Error("Name, age, and email are required.");
    }

    userData = { name, age, email };
    console.log(`User data submitted: ${JSON.stringify(userData)}`);
}