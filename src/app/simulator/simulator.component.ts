import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import {
  Milestone,
  Option,
  ResultValidationSimulator,
  Validation,
} from "../utils/interfaces";
import { convertArtifact } from "../utils/utils";
import { SimulatorService } from "./simulator.service";

@Component({
  selector: "app-simulator",
  templateUrl: "./simulator.component.html",
  styleUrls: ["./simulator.component.less"],
})
export class SimulatorComponent implements OnInit {
  inputType: string = "";
  inputMilestone: string = "";
  inputArtifact: string = "";

  headersTable: string[] = [
    "Descrição",
    "Artefacto",
    "Messagem de Erro",
    "Estado",
  ];
  contentTable: ResultValidationSimulator[] = [];
  selectedValidations: Validation[] = [];

  milestones!: Milestone[];

  statusVerification: string[] = [];

  runSimulator: boolean = false;
  open: boolean = false;

  constructor(
    private appService: AppService,
    private simulatorService: SimulatorService
  ) {}

  ngOnInit(): void {
    this.appService.updateTab("Simulator");
    this.milestones = this.simulatorService.getMilestones();
  }

  getMilestoneOptions(): Option[] {
    let array: Option[] = [];
    this.milestones.map((e) => {
      array.push({ label: e.title, value: e.color });
    });
    return array;
  }

  getArtifactOptions(): Option[] {
    let array: Option[] = [];
    this.milestones
      .find((milestone) => milestone.color === this.inputMilestone)
      ?.artifacts.map((artifact) =>
        array.push({ label: convertArtifact(artifact), value: artifact })
      );
    return array;
  }

  getMilestone(value: any) {
    return this.milestones.find((milestone) => milestone.color === value);
  }

  changeStatusModal(value: boolean) {
    this.open = value;
  }

  verificationSimulator() {
    this.runSimulator = true;
    this.statusVerification = this.simulatorService
      .runVerificationSimulator()
      .split("\\n");
  }

  validationSimulator() {
    this.runSimulator = true;
    this.contentTable = this.simulatorService.runValidationSimulator();
  }

  getColor(status: string) {
    if (status === "passed") return "rgb(37, 184, 0, 0.3)";
    else if (status === "error") return "rgb(255, 35, 21, 0.3)";
    else if (status === "warning") return "rgb(255, 176, 21, 0.3)";
    else return "";
  }

  getArtifact(artifact: string) {
    return convertArtifact(artifact);
  }

  changedSelectedValidations(validation: Validation, value: boolean) {
    if (value) {
      console.log(validation);
      this.selectedValidations.push(validation);
    } else {
      this.selectedValidations = this.selectedValidations.filter(
        (v) => v.id !== validation.id
      );
    }
  }

  getResults(status: string) {
    return this.contentTable.filter((v) => v.status === status).length;
  }
}
