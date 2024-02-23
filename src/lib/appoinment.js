export const appoinmentDefaultSort=(a, b) =>{
    // First, compare the status
    if (a?.orderStatus === 'active' && b?.orderStatus != 'active') {
        return -1; // 'active' comes before 'inactive'
    } else if (a?.orderStatus != 'active' && b?.orderStatus === 'active') {
        return 1; // 'inactive' comes after 'active'
    }

    // If status is the same, compare the dates
    return new Date(a?.appointmentDate) - new Date(b?.appointmentDate);
}