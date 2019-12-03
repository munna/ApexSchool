"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sections = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
];
exports.classes = [
    { id: 1, name: "Nursary", section_id: exports.sections[0].id },
    { id: 2, name: "KG", section_id: exports.sections[1].id },
];
exports.personDatas = [
    { id: 1, firstName: 'Munna', lastName: 'Bhakta', mobileNo: '9268310732', phoneNo: '8002256490', address: 'New Delhi,Malviya Nagar' },
    { id: 2, firstName: 'Saanvi', lastName: 'Bhakta', mobileNo: '9268310732', phoneNo: '8002256490', address: 'New Delhi,Malviya Nagar' },
    { id: 3, firstName: 'Naitik Raj', lastName: 'Bhakta', mobileNo: '9999999999', phoneNo: '8002256490', address: 'New Delhi,Malviya Nagar' }
];
exports.studentsDatas = [
    { id: 1, class_id: exports.classes[0].id, person_id: exports.personDatas[1].id },
    { id: 2, class_id: exports.classes[0].id, person_id: exports.personDatas[2].id },
    { id: 3, class_id: exports.classes[1].id, person_id: exports.personDatas[0].id },
];
//# sourceMappingURL=data.js.map