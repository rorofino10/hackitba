import { Component, inject } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { StudentInterface } from '../types/student.interface';
import { FirestoreService } from '../../shared/services/firestore.service';
import { AsyncPipe } from '@angular/common';
import { LevelIndicatorComponent } from '../../components/level-indicator/level-indicator.component';

@Component({
  selector: 'app-leaderboard',
  imports: [AsyncPipe, LevelIndicatorComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
})
export class LeaderboardComponent {
  students_service = inject(FirestoreService);

  students$ = this.students_service.getStudents();
  top5Students$ = this.students$.pipe(
    map(
      (students) =>
        [...students]
          .sort((a, b) => {
            // Sort by level descending first
            const levelDiff = b.level - a.level;
            if (levelDiff !== 0) return levelDiff;

            // Then by XP descending
            const xpDiff = b.xp - a.xp;
            if (xpDiff !== 0) return xpDiff;

            // Finally by name ascending
            return a.name.localeCompare(b.name);
          })
          .slice(0, 5) // Take top 5
    )
  );
  topStudent$ = this.students$.pipe(
    map(
      (students) =>
        [...students].sort((a, b) => {
          // Sort by level descending first
          const levelDiff = b.level - a.level;
          if (levelDiff !== 0) return levelDiff;

          // Then by XP descending
          const xpDiff = b.xp - a.xp;
          if (xpDiff !== 0) return xpDiff;

          // Finally by name ascending
          return a.name.localeCompare(b.name);
        })[0] // Take top 5
    )
  );
}
