
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


// generic fetch
async function request(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache : 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

// specialties
export async function getSpecialties() {
  const data = await request("/specialty/specialties");
  return data.specialties;
}

// doctors
export async function getDoctors() {
  const data = await request("/doctor/doctors");
  return data.doctors;
}

// patients
export async function getPatients() {
  const data = await request("/patients");
  return data.patients;
}