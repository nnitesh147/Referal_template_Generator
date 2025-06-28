import { FormData } from "../components/Form";

export const generateTemplate = ({ data }: { data: FormData }): string => {
  const template = `
    Referal for a job opportunity in ${data.applying_company}\n
    Hi ${data.referee_name},\n
    I hope this message finds you well. 😊\n
    My name is ${data.first_name}, and I recently graduated from ${
    data.college
  } with a CGPA of ${
    data.cgpa
  }. Additionally, I have gained valuable experience as a ${
    data.current_role
  } at ${data.current_company}.\n
    I am keenly interested in the ${data.applying_role} role at ${
    data.applying_company
  }. I believe my background and skills align well with the requirements of this position.\n 
    ${data.short_description}\n
    I have attached my resume below for your reference. I am looking forward to your response. 😊\n
    Resume: ${data.resume_link}\n
    Could you please assist me with the referral for this job opportunity?\n
    Job Identification: ${data.job_id}\n
    ${data.job_link ? `Job Link: ${data.job_link}\n` : ""}
    Best regards,\n
    ${data.first_name}\n
    ${data.email}\n
    ${data.contact}\n
    `;
  return template;
};
