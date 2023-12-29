import { auth } from "@clerk/nextjs";

const OrganizationPage = () => {
    const { userId, orgId } = auth();
  return (
      <div>OrganizationPage {userId} {orgId}</div>
  )
}

export default OrganizationPage