import Audit from '../Model/Audit.mjs';

export async function audit(params) {
    const audit_data = new Audit();
    let response = await audit_data.getAudit(params);
    return response;
}

export async function auditCont(params) {
    const auditCont_data = new Audit();
    let response = await auditCont_data.getCount(params);
    return response;
}

