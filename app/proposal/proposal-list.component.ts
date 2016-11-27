import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    15, 'Abc Company', 'http://szmagyar.com', 'RoR', 123, 123, 14, 'szmagyar@gmail.com'
  )
  proposalTwo: Proposal = new Proposal(
    16, 'asdf Company', 'http://szmagyar.com', 'RoR', 123, 123, 14, 'szmagyar@gmail.com'
  )
  proposalThree: Proposal = new Proposal(
    17, 'zxcv Company', 'http://szmagyar.com', 'RoR', 123, 123, 14, 'szmagyar@gmail.com'
  )

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}