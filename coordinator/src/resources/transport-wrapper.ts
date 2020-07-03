import {ParentPrescription} from "../services/hl7-v3-prescriptions";
import {ElementCompact, xml2js} from "xml-js";
import * as fs from "fs"
import * as path from "path"
import Mustache from "mustache"

const wrapperTemplate = fs.readFileSync(path.join(__dirname, "./ConvertWrapper.mustache"), "utf8")

export const wrap = function (payload: ParentPrescription): ElementCompact {
    const options = {compact: true}
    const wrapperStr = Mustache.render(wrapperTemplate, {from_asid: process.env.FROM_ASID, to_asid: process.env.TO_ASID})
    const wrapperJson = xml2js(wrapperStr, options) as ElementCompact
    wrapperJson.PORX_IN020101UK31.ControlActEvent.subject.ParentPrescription = payload
    return wrapperJson
}
